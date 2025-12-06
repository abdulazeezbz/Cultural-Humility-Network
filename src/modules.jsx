import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import { useAuth } from "./AuthContext"; // assuming you have AuthContext


import { collection, updateDoc, arrayUnion, query, orderBy, onSnapshot, doc, getDoc } from "firebase/firestore";

import { db } from "./firebase";


import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';
import Footer from './footer';

function Modules() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navigate = useNavigate();   // <-- HERE



   const { currentUser } = useAuth();
  const [modules, setModules] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

   // Fetch current user data
  useEffect(() => {
    if (!currentUser) return;
    const fetchUser = async () => {
      const userRef = doc(db, "users", currentUser.uid);
      const snapshot = await getDoc(userRef);
      setUserData(snapshot.data());
    };
    fetchUser();
  }, [currentUser]);

  // Fetch modules with real-time listener
useEffect(() => {
  const modulesRef = collection(db, "modules");

  // Query modules ordered by createdAt ascending (oldest first)
  const q = query(modulesRef, orderBy("createdAt", "asc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    let mods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Optional: free modules first while keeping chronological order
    mods.sort((a, b) => {
      if (a.free === b.free) {
        // keep oldest to newest
        return a.createdAt?.toMillis() - b.createdAt?.toMillis();
      }
      return a.free ? -1 : 1; // free modules first
    });

    setModules(mods);
    setLoading(false);
  });

  return () => unsubscribe();
}, []);


if (loading) return <p>Loading modules...</p>;
const handleStartLearning = async (module) => {
  if (!currentUser) {
    alert("You must sign in first to start learning.");
    navigate("/login");
    return;
  }

  const userRef = doc(db, "users", currentUser.uid);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.exists() ? userSnap.data() : {};

  // Add module to learningStarted if not already there
  const hasStarted = userData.learningStarted?.includes(module.id);
  if (!hasStarted) {
    if (userSnap.exists()) {
      await updateDoc(userRef, {
        learningStarted: arrayUnion(module.id)
      });
    } else {
      await setDoc(userRef, {
        learningStarted: [module.id]
      });
    }
  }

  // Existing logic for free/unlocked modules
  if (module.free) {
    navigate(`/learning/${module.id}`);
    return;
  }

  const isUnlocked = userData?.unlockedModules?.includes(module.id);
  if (isUnlocked) {
    navigate(`/learning/${module.id}`);
  } else {
    alert("This module is locked. Please contact admin to unlock it.");
  }
};



  return (
    <>

    <TopNav />

   




     <br /><br />
    

 <div className="content modules about"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h2 style={{lineHeight:1,}}> Cultural Humility in Practice</h2>
          <p id="ABZZ" style={{fontSize:16,}} className='b' >
            CHN offers self-guided learning on cultural humility in health, social care, education and community settings. Work through core modules, explore specialist topics, and collect certificates you can use for CPD or portfolio evidence.</p>


<div className="">
          <button className="cta" onClick={()=> navigate("/training")}>Training & Workshops</button>
          <button className="cta outlines" onClick={()=> navigate("/community")}>Meet The Community</button>
</div>
      </div>



        <div className="content modules"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
      


          

             <div className="content b" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
  <div className="card" style={{textAlign:'left', background:'transparent', border:'none', marginTop:-25, padding:0}}>
      <div className="card">
      <h3>Modules</h3>
      <p>Start with the free foundational modules, then continue along the core pathway and add specialist modules that fit your role. Each module includes short theory, UK-relevant examples, interactive activities and a knowledge check.</p>
      <div className="badges"> <span> Free foundational modules </span> 
      <span>Contribution-supported modules: (min £5)</span>
       <span> Quizzes with pass mark ≥80%</span> </div> </div> <br />
      
      <br />

      {modules.map((module, idx) => {
  // If user is not signed in, treat as locked if module is paid
  const isUnlocked = module.free || userData?.unlockedModules?.includes(module.id);
  const isPaid = !module.free;

  return (
    <div
      key={module.id}
      className={`card module ${isPaid && !isUnlocked ? "danger" : ""}`}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <details>
        <summary className='courseD'>
          <div>
            <h3>{module.title}</h3>
            <p>  Est Time {module.Estimated || "N/A"} · Quiz included</p>
          </div>
          <div>

            {userData?.learningStarted?.includes(module.id) ? "Started" : "Not Started"}
            <p>{isUnlocked ? "" : "Locked"} {isPaid && !isUnlocked && <ion-icon name="lock-closed-outline"></ion-icon>}</p>
            <p>Access: {module.free ? "Free" : isUnlocked ? "Unlocked" : "Contribution (min £5)"}</p>
          </div>
        </summary>

        <div className="Desc">
          <p>{module.description}</p>
          {module.details?.map((detail, i) => (
            <li key={i}><ion-icon name="checkmark-done-circle-outline"></ion-icon> {detail}</li>
          ))}

          <br />
          
          
          {module.banner && (
  <img 
    src={module.banner} 
    className="ModuleBanner" 
    alt="Module Banner" 
  />
)}


          {isPaid && !isUnlocked && (
            <b style={{fontSize:14}}>
              This module is offered on a contribution basis. A minimum of £5 is requested, and any additional amount you are able to give helps to support hosting and development. This site is not run as a business and is not a registered charity or NGO; contributions simply help to keep the project going.
            </b>
          )}

          <br /><br />
        <button className="cta mini" onClick={() => handleStartLearning(module)}>
  {userData?.learningStarted?.includes(module.id) ? "Continue Learning" : "Start Learning"}
</button>
          {/* <button className='cta mini outlines' >View Outline</button> */}
          {/* <button className='cta mini outlines'>Generate certificate</button> */}
        </div>
      </details>
    </div>
  );
})}
      
    </div>
 

   </div>

                        
      </div>

        <div className="content cert" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="">
          <h2>Certificates</h2>
          <p><b>Per-module certificates:</b> Available as soon as each module is completed. Use the button on each card.</p>
          
          <br />
          <button className="cta cerr"  onClick={()=> navigate("/login")}>Generate Certificate</button>
          <p>Every certificate includes a unique serial and public verification link.</p>
          </div>

           <div className="">
            <h2>.</h2>
          <p><b>Overall certificate:</b>Complete all 5 modules to unlock.
          </p>
          <br />

          <button className="cta cerr"  onClick={()=> navigate("/login")}>Generate Certificate</button>
          <p>Complete all modules to unlock the overall certificate.</p>

          
          </div>
        </div>


<br />



        <div className="content card" style={{width:"98%", margin:'auto'}} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <h2>Publications and research</h2>
          <p>Selected research, evaluation and implementation work linked to cultural humility, equity and this learning hub. Over time this section will grow as new projects and collaborations develop.
            
          </p>
<br />
          <p><b>Embedding cultural humility in routine healthcare practice: an implementation science approach</b></p>
          <p>Usman, J. (forthcoming) · Journal article · Public health, nursing, implementation science</p>
          <br />
          <button className="cta outlines mini" style={{width:'auto'}} >Read abstract (coming soon)</button>
<hr />
<br />

  <p><b>Reducing salt intake in Black communities using digital interventions: outcomes and reflections</b></p>
          <p>Usman, J. (doctoral research) · Digital intervention · Behaviour change, health inequalities</p>
          <br />
          <button className="cta outlines mini" style={{width:'auto'}} >View summary (coming soon)</button>

          </div>

        </div>


<br /><br /><br />


      
      <Footer />

    </>
  )
}

export default Modules
