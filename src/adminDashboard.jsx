import React, {useEffect, useState} from 'react';

import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import ATopNav from './atn';

import { ref, onValue  } from "firebase/database";

import { db, rtdb  } from "./firebase";
import { collection, addDoc, limit, startAfter ,
    onSnapshot, deleteDoc, doc , query, where, getDocs
} from "firebase/firestore";
import PendingPosts from './pendingPosts';

const AdminDashboard = () => {


     const [posts, setPosts] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [hasNext, setHasNext] = useState(false);
  const limit = 10;





    const { currentUser, loading } = useAuth();
  const navigate = useNavigate();


      useEffect(() => {
    if (!loading) {
      if (!currentUser || currentUser.role !== "Admin") {
        alert("Access denied. Only admins can view this page.");
        navigate("/login"); // redirect non-admins
      }
    }
  }, [currentUser, loading, navigate]);

  if (loading) return <p>Loading...</p>;



  const [adminStats, setAdminStats] = useState({
  totalUsers: "loading...",
  freeModules: "loading...",
  paidModules: "loading...",
  blockedUsers: "loading...",
  commentsPending: "loading...",
  commentsApproved: "loading...",
  blogsPending: "loading...",
  blogsApproved: "loading...",
  threadsPending: "loading...",
  threadsApproved: "loading..."
});


useEffect(() => {
  if (!currentUser || currentUser.role !== "Admin") return;

  const loadAdminStats = async () => {
    // USERS
    const usersSnap = await getDocs(collection(db, "users"));

    let totalUsers = usersSnap.size;
    let blockedUsers = usersSnap.docs.filter(u => u.data().blocked === true).length;

    // MODULES (Assuming collection: "modules")
    const modulesSnap = await getDocs(collection(db, "modules"));
    let freeModules = modulesSnap.docs.filter(m => m.data().price === 0).length;
    let paidModules = modulesSnap.docs.filter(m => m.data().price > 0).length;

    // POSTS
    const postsSnap = await getDocs(collection(db, "posts"));
    let allPosts = postsSnap.docs.map(doc => doc.data());

    // COMMENTS = posts with parentId NOT null
    let comments = allPosts.filter(p => p.parentId !== null);

    let commentsPending = comments.filter(c => c.status === "pending").length;
    let commentsApproved = comments.filter(c => c.status === "approved").length;

    // BLOGS = type = blog
    let blogs = allPosts.filter(p => p.type === "blog");

    let blogsPending = blogs.filter(b => b.status === "pending").length;
    let blogsApproved = blogs.filter(b => b.status === "approved").length;

    // THREADS = discussion posts with parentId null
    let threads = allPosts.filter(p => p.type === "discussion" && p.parentId === null);

    let threadsPending = threads.filter(t => t.status === "pending").length;
    let threadsApproved = threads.filter(t => t.status === "approved").length;


    setAdminStats({
      totalUsers,
      freeModules,
      paidModules,
      blockedUsers,
      commentsPending,
      commentsApproved,
      blogsPending,
      blogsApproved,
      threadsPending,
      threadsApproved
    });
  };

  loadAdminStats();
}, [currentUser]);




 const [newRequests, setNewRequests] = useState("Loading");
  const [completedRequests, setCompletedRequests] = useState("Loading");

  

   useEffect(() => {
    const reqRef = ref(rtdb, "enquiries");  // ✔ USE rtdb HERE

    const unsubscribe = onValue(reqRef, (snapshot) => {
      if (!snapshot.exists()) {
        setNewRequests(0);
        setCompletedRequests(0);
        return;
      }

      const data = snapshot.val();
      const requests = Object.values(data);

      setNewRequests(requests.filter(r => r.status === "new").length);
      setCompletedRequests(requests.filter(r => r.status === "completed").length);
    });

    return () => unsubscribe();
  }, []);




  
  return (
    <>
        <ATopNav />
        
<div className="content modules about"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

        
<section className="section glanc">
  <div className="">
  <h2>
    Welcome Back {currentUser.name}!
  </h2>
  <p>You can Manage Modules, Approve Posts / Blogs, Unlock Modules</p>
<center>
<div className="glance new" aria-label="Cultural Humility Hub at a glance">
   
      <div className="glance-item">
        <div className="glance-label">Total Users</div>
        {currentUser && (
  <div className="glance-value">{adminStats.totalUsers}</div>
)}
    <p className="glance-text">Total users registered on the website</p>
      </div>

            <div className="glance-item">
        <div className="glance-label">Total Modules</div>
        <div className="glance-value">        {currentUser && (
  <div className="glance-value"> | Free {adminStats.freeModules} | Paid {adminStats.paidModules} |</div>
)}
    </div>
        <p className="glance-text">above are the stats for the learning paths paid, and free ones</p>
      </div>


  <div className="glance-item">
  <div className="glance-label">Training Requests</div>

  <div className="glance-value">
    {currentUser && (
      <div className="glance-value">
        | New {newRequests} | Completed {completedRequests} |
      </div>
    )}
  </div>

  <p className="glance-text">
    Track and manage all incoming and completed training requests here.
  </p>
</div>

      <div className="glance-item">
        <div className="glance-label">Comments posted</div>
        <div className="glance-value">        {currentUser && (
  <div className="glance-value">| Pending {adminStats.commentsPending} | Approved {adminStats.commentsApproved} |</div>
)}

    </div>
        <p className="glance-text">Thoughtful comments help build shared learning and support.</p>
      </div>
      <div className="glance-item">
        <div className="glance-label">Blog posts submitted</div>
        <div className="glance-value">        {currentUser && (
  <div className="glance-value">  | Pending {adminStats.blogsPending} | Approved {adminStats.blogsApproved} |</div>
)}

  </div>
        <p className="glance-text">Longer reflections can be shared as blog posts once you feel ready.</p>
      </div>


      
      <div className="glance-item">
        <div className="glance-label">Threads started</div>
        {currentUser && (
  <div className="glance-value">| Pending {adminStats.threadsPending} | Approved {adminStats.threadsApproved} |</div>
)}
    <p className="glance-text">Once you post your first thread, this number begins to grow.</p>
      </div>


    </div>
</center>


</div>



  </section>


  </div>


<br />
<PendingPosts/>
    </>
  )
}

export default AdminDashboard