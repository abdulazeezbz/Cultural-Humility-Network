import { useState } from "react";
import { useAuth } from "./AuthContext";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp  } from "firebase/firestore";

const NewPost = ({ type }) => {
  const { currentUser } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(!currentUser);
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    if (!title || !content) {
      alert("Please fill in both title and content.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "posts"), {
        type, // "discussion" or "blog"
        title,
        content,
        anonymous,
        status: "pending", // default pending
        uid: currentUser ? currentUser.uid : null,
        createdAt: serverTimestamp(),
         reactions: {},
        parentId: null
      });

      alert(`${type === "blog" ? "Blog Post" : "Discussion"} published successfully! \n and the post is under Review By Admin`);
      setTitle("");
      setContent("");
      setAnonymous(!currentUser);
    } catch (error) {
      console.error("Error publishing post:", error);
      alert("Failed to publish post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
      <h2>{type === "blog" ? "Start a Blog Post" : "Start a Discussion"}</h2>
      <br />

      <div>
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
        />{" "}
        Post anonymously
      </div>

      <br />
      <label>Post Title</label>
      <div className="inputGroup">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <label>Post Content</label>
      <div className="inputGroup">
        <textarea
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button
        className="cta mini"
        onClick={handlePublish}
        disabled={loading}
      >
        {loading ? "Publishing..." : "Publish"}
      </button>
    </div>
  );
};

export default NewPost;
