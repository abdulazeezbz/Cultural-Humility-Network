import { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuth } from "./AuthContext";

const ReplyModal = ({ postId, type, onClose }) => {
  const { currentUser } = useAuth();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReply = async () => {
    if (!content.trim()) return alert("Reply cannot be empty.");

    setLoading(true);

    await addDoc(collection(db, "posts"), {
      parentId: postId,
      type,
      content,
      title: "",
      anonymous: !currentUser,
      status: "pending",
      uid: currentUser.uid,
      createdAt: serverTimestamp(),
      reactions: {},
    });

    setLoading(false);
    onClose();
    alert("Reply submitted (awaiting approval)");
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h3>Reply to post</h3>
        <p>Replays Must Be Reviewed By Admin!</p>

        <textarea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="modalActions">
          <button className="cta mini" onClick={handleReply}>
            {loading ? "Posting..." : "Send Reply"}
          </button>
          <button className="cta outlines mini" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
