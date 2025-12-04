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

const AdminPosts = () => {






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





  
  return (
    <>
        <ATopNav />
        
<div className="content modules about"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

        <h2>Manage Posts and Blogs Here!</h2>
        <p>You can approve or delete posts From Here as an Admin</p>


  </div>
<br />

<PendingPosts/>



    </>
  )
}

export default AdminPosts