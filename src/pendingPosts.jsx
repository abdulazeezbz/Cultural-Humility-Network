import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
  getDoc,
  deleteDoc 
} from "firebase/firestore";
import { db } from "./firebase";

function PendingPosts() {
    const [approvingPosts, setApprovingPosts] = useState([]); // array of postIds being approved
  const [posts, setPosts] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [firstDoc, setFirstDoc] = useState(null); // for Previous button
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  
//   const limitNumber = 10;

  // Helper to get user info
  const getUserInfo = async (uid) => {
    if (!uid) return { name: "Unknown", email: "Unknown" };
    const userDoc = await getDoc(doc(db, "users", uid));
    return userDoc.exists() ? userDoc.data() : { name: "Unknown", email: "Unknown" };
  };


  const [pageHistory, setPageHistory] = useState([]);

  const fetchPosts = async (direction = "next") => {
    setLoading(true);

    try {
      const postsRef = collection(db, "posts");
      let q;

      if (direction === "next" && lastDoc) {
        q = query(postsRef, orderBy("createdAt", "desc"), startAfter(lastDoc));
      } else if (direction === "prev" && firstDoc) {
        // For previous page we need a more complex query
        // Firestore doesn't support startBefore directly in combination with limit descending
        // Simple solution: keep all fetched pages in memory or disable prev
        // For now, let's keep prev disabled
        return;
      } else {
        q = query(postsRef, orderBy("createdAt", "desc"));
      }

      const snapshot = await getDocs(q);

      const items = await Promise.all(
        snapshot.docs.map(async (docSnap) => {
          const data = docSnap.data();
          const user = await getUserInfo(data.uid);
          return { id: docSnap.id, ...data, user };
        })
      );

      // Sort pending first
      items.sort((a, b) => {
        if (a.status === "pending" && b.status !== "pending") return -1;
        if (a.status !== "pending" && b.status === "pending") return 1;
        return 0;
      });

      setPosts(items);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      setFirstDoc(snapshot.docs[0]);
      setHasNext(false);
      setHasPrev(currentPage > 0);


      setLoading(false);
      if (direction === "next") setCurrentPage((prev) => prev + 1);
      if (direction === "prev") setCurrentPage((prev) => prev - 1);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };


  

  const handleApprovePost = async (postId) => {
  try {
    if (!postId) return;

    // Add postId to approving list
    setApprovingPosts((prev) => [...prev, postId]);

    // Reference the specific post
    const postRef = doc(db, "posts", postId);

    // Update status to approved
    await updateDoc(postRef, {
      status: "approved",
      updatedAt: serverTimestamp(),
    });

    // Remove postId from approving list
    setApprovingPosts((prev) => prev.filter((id) => id !== postId));

    // Update local posts state immediately (real-time feel)
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, status: "approved" } : post
      )
    );

    // Show success alert
    alert("Post approved successfully!");
  } catch (error) {
    console.error("Error approving post:", error);
    setApprovingPosts((prev) => prev.filter((id) => id !== postId));
    alert("Error approving post!");
  }
};



const [deletingPosts, setDeletingPosts] = useState([]); // array of postIds being deleted


const handleDeletePost = async (postId) => {
  try {
    if (!postId) return;

    // Add postId to deleting list
    setDeletingPosts((prev) => [...prev, postId]);

    // Reference the specific post
    const postRef = doc(db, "posts", postId);

    // Delete the post
    await deleteDoc(postRef);

    // Remove postId from deleting list
    setDeletingPosts((prev) => prev.filter((id) => id !== postId));

    // Remove post from local state immediately
    setPosts((prev) => prev.filter((post) => post.id !== postId));

    // Show success alert
    alert("Post deleted successfully!");
  } catch (error) {
    console.error("Error deleting post:", error);
    setDeletingPosts((prev) => prev.filter((id) => id !== postId));
    alert("Error deleting post!");
  }
};




  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="section glanc">
      <div>
        <center>
          <h2>Posts</h2>
          <p>Approve/Delete Post Here!</p>


          <div className="slideee">
            <table>
              <thead>
                <tr>
                  <th>SN</th>
                  <th style={{ minWidth: 250, textAlign: "left" }}>Post</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td style={{ maxWidth: 100, textAlign: "left" }}>
                      <div style={{ display: "flex" }}>
                        <h3>{item.title || "Post Title"}</h3>
                        &nbsp;
                        <p>
                          <b>({item.type || "Blog"})</b>
                        </p>
                      </div>
                      <p>{item.content}</p>
                    </td>
                    <td>
                      <p>{item.user?.name || "Unknown"}</p>
                      <p>{item.user?.email || "Unknown"}</p>
                    </td>
                    <td>
                      {item.createdAt?.toDate
                        ? item.createdAt.toDate().toLocaleDateString()
                        : new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        className="cta mini outlines"
                        style={{ width: "auto", margin: 5, padding: "0px 10px" }}
                        onClick={() => handleDeletePost(item.id)}
                      >
                         {deletingPosts.includes(item.id) ? (
    <div
      className="spinner"
style={{color:'var(--accent)'}}
    >...</div>
  ) : (
    "Delete"
  )}
                      </button>

                     {item.status === "pending" && (
  <button
    className="cta mini"
    style={{ width: "auto", margin: 5, padding: "0px 10px" }}
    onClick={() => handleApprovePost(item.id)}
    disabled={approvingPosts.includes(item.id)}
  >
    {approvingPosts.includes(item.id) ? (
      <div
        className="spinner"
      ></div>
    ) : (
      "Approve"
    )}
  </button>
)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="pagination" style={{ marginTop: 20 }}>
  {hasPrev && (
    <button
      className="cta mini outlines"
      disabled={loading}
      onClick={() => fetchPosts("prev")}
    >
      Previous
      {loading && (
        <>...</> 
      )}
    </button>
  )}

  {hasNext && (
    <button
      className="cta mini"
      disabled={loading}
      onClick={() => fetchPosts("next")}
    >
      Next
      {loading && (
        <div
          className="spinner"
          style={{
            display: "inline-block",
            marginLeft: "10px",
            width: "15px",
            height: "15px"
          }}
        ></div>
      )}
    </button>
  )}
          </div> */}
        </center>
      </div>
    </section>
  );
}

export default PendingPosts;
