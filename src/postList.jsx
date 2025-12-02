import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { db } from "./firebase";
import { collection, query, where, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";



import userIcon from './assets/user.webp'
import userIcon2 from './assets/user2.png'


const PostsList = ({ type }) => { // type: "discussion" or "blog"
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!type) return;

    const q = query(
      collection(db, "posts"),
      where("status", "==", "approved"),
      where("type", "==", type), // filter by type
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(fetchedPosts);
    });

    return () => unsubscribe();
  }, [type]);

const handleReaction = async (postId, reactionType) => {
  if (!currentUser) return alert("Please login to react.");

  const postRef = doc(db, "posts", postId);
  const post = posts.find(p => p.id === postId);

  const userId = currentUser.uid;
  const reactions = post.reactions || { likes: [], dislikes: [], recommends: [] };

  // Remove user from the clicked reaction if already present (toggle)
  if (reactions[reactionType]?.includes(userId)) {
    reactions[reactionType] = reactions[reactionType].filter(id => id !== userId);
  } else {
    // Add user to the clicked reaction
    reactions[reactionType] = reactions[reactionType]
      ? [...reactions[reactionType], userId]
      : [userId];

    // Enforce mutual exclusion rules
    if (reactionType === "likes") {
      // If user likes, remove dislike if exists
      reactions.dislikes = reactions.dislikes?.filter(id => id !== userId) || [];
    } else if (reactionType === "dislikes") {
      // If user dislikes, remove like and recommend if exists
      reactions.likes = reactions.likes?.filter(id => id !== userId) || [];
      reactions.recommends = reactions.recommends?.filter(id => id !== userId) || [];
    }
  }

  await updateDoc(postRef, { reactions });
};

  return (
    <div>
      {posts.length === 0 && <p>No {type === "blog" ? "blog posts" : "discussions"} yet.</p>}

      {posts.map((post) => (
        <div className="postCard" key={post.id}>
          <div className="card">
            <div className="poster">
              <img
                src={post.anonymous ? userIcon2 : userIcon}
                alt=""
              />
              <div>
                <h4>{post.anonymous ? "Anonymous User" : currentUser?.name || "User"}</h4>
                <p>{post.createdAt?.toDate?.().toLocaleDateString() || "Unknown date"}</p>
              </div>
            </div>

            <div className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>

            {currentUser ? (
              <>
                <div className="controls">
                  <button
                    className="cta outlines mini"
                    onClick={() => handleReaction(post.id, "likes")}
                  >
                    Like&nbsp;({post.reactions?.likes?.length || 0})
                  </button>
                  <button
                    className="cta outlines mini"
                    onClick={() => handleReaction(post.id, "dislikes")}
                  >
                    DisLike&nbsp;({post.reactions?.dislikes?.length || 0})
                  </button>
                  <button
                    className="cta outlines mini"
                    onClick={() => handleReaction(post.id, "recommends")}
                  >
                    Recommend&nbsp;({post.reactions?.recommends?.length || 0})
                  </button>
                </div>

                <div className="controls">
                  <button className="cta mini">Reply in a new thread</button>
                </div>
              </>
            ) : (
              <p style={{ marginTop: "10px" }}>Sign in to react or reply</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
