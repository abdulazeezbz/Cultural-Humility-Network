import React, {useEffect, useState} from 'react';

import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import ATopNav from './atn';

import { ref, onValue  } from "firebase/database";

import { db, rtdb  } from "./firebase";
import { collection, addDoc, 
    limit, startAfter , orderBy ,
    onSnapshot, deleteDoc, doc , query, where, getDocs
} from "firebase/firestore";
import PendingPosts from './pendingPosts';
import AdminModuleControls from './AddModules';
import AddModuleModal from './AddModules';
import UnlockModuleModal from './unlockModules';

const AdminModules = () => {




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




  const [showAddModal, setShowAddModal] = useState(false);
const [showUnlockModal, setShowUnlockModal] = useState(false);




      const [modules, setModules] = useState([]);
  const [loadingM, setLoadingM] = useState(true);

 useEffect(() => {
  const modulesRef = collection(db, "modules");

  // Query modules ordered by createdAt ascending (oldest first)
  const q = query(modulesRef, orderBy("createdAt", "asc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    let mods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Optional: put free modules first while keeping createdAt ascending within each group
    mods.sort((a, b) => {
      if (a.free === b.free) {
        // Keep createdAt ascending
        return a.createdAt?.toMillis() - b.createdAt?.toMillis();
      }
      return a.free ? -1 : 1; // free first
    });

    setModules(mods);
    setLoadingM(false);
  });

  return () => unsubscribe();
}, []);

  if (loadingM) return <p>Loading modules...</p>;




  
const DeleteModule = async (moduleId) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this module?");
  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "modules", moduleId));
    alert("Module deleted successfully!");
  } catch (err) {
    console.error("Error deleting module:", err);
    alert("Failed to delete module. Check console for details.");
  }
};
  
  return (
    <>
        <ATopNav />
        
<div className="content modules about"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
<br />
            <h2>Manage Modules and Learnings Here!</h2>
        <p>You can Unlock or Lock Module For a user as an Admin</p>

        <button className='cta mini' onClick={()=> setShowAddModal(true) }><ion-icon name="add-outline"></ion-icon> Add Module / Learning</button>
        <button className='cta mini outlines' onClick={()=> setShowUnlockModal(true) }>
            <ion-icon name="lock-open-outline"></ion-icon> unlock Module</button>
<br />
        

<br /><br />




 <div className="card">
      <h3>Modules</h3>
      <br />

      {modules.map((module, idx) => (
        <div
          key={module.id}
          className={`card module ${!module.free ? "danger" : ""}`}
          data-aos="fade-up"
          data-aos-delay={100 * (idx + 1)}
          data-aos-duration="1000"
        >
          <details>
            <summary className='courseD'>
              <div>
                <h3 style={{ textAlign: "left" }}>
                  {`${module.title}`}
                </h3>
                <p style={{ textAlign: "left" }}>
                  Est Time {module.Estimated || "N/A"} · Quiz included
                </p>
              </div>
              <div>
                <p>Access: {module.free ? "free" : "Contribution (min £5)"}</p>
              </div>
            </summary>

            <div className="Desc">
              <p style={{ textAlign: "left" }}>{module.description}</p>
              {module.details?.map((detail, i) => (
                <li
                  key={i}
                  style={{ listStyle: "none", textAlign: "left" }}
                >
                  <ion-icon name="checkmark-done-circle-outline"></ion-icon> {detail}
                </li>
              ))}

              <br />
              <button
                className='cta mini'
                style={{ width: "45%" }}
                onClick={() => 
                    
                    navigate(`/admin/module/${module.id}/lessons`)}
            
              >
                Add Lessons
              </button>

               <button
                className='cta mini outlines'
                style={{ width: "50%" }}
                onClick={() => DeleteModule(module.id)}
              >
                Delete Module
              </button>
            </div>
          </details>
        </div>
      ))}
    </div>



  </div>

{showAddModal && <AddModuleModal onClose={() => setShowAddModal(false)} />}
{showUnlockModal && <UnlockModuleModal onClose={() => setShowUnlockModal(false)} />}



    </>
  )
}

export default AdminModules