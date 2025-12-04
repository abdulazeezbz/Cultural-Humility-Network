import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { db } from "./firebase";
import { collection, limit, startAfter, query, where, getDoc, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";



import userIcon from './assets/user.webp'
import userIcon2 from './assets/user2.png'
import ReplyModal from "./ReplyModal";


const PostsList = ({ type }) => { // type: "discussion" or "blog"
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [userCache, setUserCache] = useState({});

  const [lastDoc, setLastDoc] = useState(null);

useEffect(() => {
  if (!type) return;

  const q = query(
    collection(db, "posts"),
    where("status", "==", "approved"),
    where("type", "==", type),
    orderBy("createdAt", "desc"),
  );

  const unsubscribe = onSnapshot(q, async (snapshot) => {
    const fetchedPosts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setPosts(fetchedPosts);
     setLastDoc(snapshot.docs[snapshot.docs.length - 1]); // <- required

    // Fetch user names for all posts
    for (const post of fetchedPosts) {
      if (post.uid && !userCache[post.uid]) {
        const userDoc = await getDoc(doc(db, "users", post.uid));
        setUserCache((prev) => ({
          ...prev,
          [post.uid]: userDoc.exists() ? userDoc.data().name : "Unknown User",
        }));
      }
    }
  });

  return () => unsubscribe();
}, [type]);


  const loadMore = () => {
  const next = query(
    collection(db, "posts"),
    where("status", "==", "approved"),
    where("type", "==", type),
    orderBy("createdAt", "desc"),
    startAfter(lastDoc),
    limit(10)
  );

  onSnapshot(next, (snapshot) => {
    const more = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    setPosts(prev => [...prev, ...more]);
    setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
  });
};




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


const mainPosts = posts.filter(p => !p.parentId);
const replies = posts.filter(p => p.parentId);




const [replyingTo, setReplyingTo] = useState(null);
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
                <h4> {post.anonymous
    ? "Anonymous User"
    : userCache[post.uid] || "Loading..."}</h4>
                <p>{post.createdAt?.toDate?.().toLocaleDateString() || "Unknown date"}</p>
              </div>
            </div>


            <div className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>


            {currentUser ? (
              <>
              <React.Fragment key={post.id + "_controls"}>
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
                  {currentUser && (
  <button
    className="cta mini"
    onClick={() => setReplyingTo(post.id)}
  >
    Reply to {post.type}
  </button>



)}




{replyingTo && (
  <ReplyModal
    postId={replyingTo}
    type={post.type}
    onClose={() => setReplyingTo(null)}
  />
)}




                </div>

                </React.Fragment>
              </>
            ) : (
              <p style={{ marginTop: "10px" }}>Sign in to react or reply</p>
            )}

             <br />
                                {/* replies */}
    {replies
      .filter(r => r.parentId === post.id)
      .map(reply => (
        <React.Fragment key={reply.id + "_control"}>
        
       
        <p style={{width:"100%"}} disabled> <b>Replay:</b> </p>
        <div key={reply.id} className="card">
          <p>{reply.content}</p>
        </div>
        
        </React.Fragment>
      ))
    }
          </div>

          
        </div>
      ))}

      {/* <button onClick={loadMore}>Load more</button> */}
    </div>
  );
};

export default PostsList;
