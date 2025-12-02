import React, {useState, useEffect} from 'react'
import TopNav from './topnava'

import { db } from "./firebase";
import { collection, addDoc, onSnapshot, deleteDoc, doc   } from "firebase/firestore";


import { useAuth } from "./AuthContext";

import { useNavigate } from "react-router-dom";
import Community from './community';

const DashboardPage = () => {


    const cancelCommitment = async (id) => {
  await deleteDoc(doc(db, "users", currentUser.uid, "commitments", id));
};



      const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [plans, setPlans] = useState([]);

  useEffect(() => {
  if (!currentUser) return;

  const unsub = onSnapshot(
    collection(db, "users", currentUser.uid, "commitments"),
    (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlans(list);
    }
  );
  return unsub;
}, [currentUser]);





  if (!currentUser) return (
    <>
  <h1>Login To View this Page </h1>
  <button className='cta mini' onClick={()=> navigate('/login')}>Go To Login</button>
  </>
);








const [commitment, setCommitment] = useState("");
const [date, setDate] = useState("");

const saveCommitment = async () => {
  if (!commitment || !date) {
    return alert("Please fill both fields");
  }

  if (!currentUser) {
    return alert("You must be logged in");
  }

  try {
    await addDoc(
      collection(db, "users", currentUser.uid, "commitments"),
      {
        commitment,
        date,
        createdAt: new Date(),
        status: 'upcoming',
        done: false,
      }
    );

    alert("Saved!");
    setCommitment("");
    setDate("");

  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};



const getRemainingText = (dateString) => {
  const today = new Date();
  const target = new Date(dateString);

  const diff = target - today;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (days > 1) return `${days} days remaining`;
  if (days === 1) return "1 day remaining";
  if (days === 0) return "Today";
  return "Passed";
};


  return (
    <>
    <TopNav/>

    <div className="dashb">
      
      <h2>Welcome back, {currentUser.name || currentUser.email}!</h2><br />
        <div className="child">
        <div className="c one">
            <div className="card">
                <h3>My Action Plan</h3>
                <p>Create and track your SMART commitments from the modules. Check them off as you complete them.</p>
                <div className="inputGroup">
                    <input
      type="text"
      placeholder="New commitment"
      value={commitment}
      onChange={(e) => setCommitment(e.target.value)}
    />

    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />

    <button className="cta mini" onClick={saveCommitment}>
      Add
    </button>
                </div>


 <br /><br />

 <div className="slideee">


                <table>
                    <thead>
                    <tr>
                    <th>SN</th>
                    <th style={{minWidth:150}}>Plan</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                   
                 <tbody>
  {plans.length === 0 && (
    <tr>
      <td colSpan={5}>No plans yet</td>
    </tr>
  )}

  {plans.map((item, index) => {
    const statusText = getRemainingText(item.date);

    return (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.commitment}</td>
        <td>{item.date}</td>
        <td>{statusText}</td>

        <td>
            <button
              className='cta mini outlines'
              style={{width:'auto', padding:"4px 26px"}}
              onClick={() => cancelCommitment(item.id)}
            >
              Delete
            </button>
        
        </td>

      </tr>
    );
  })}
</tbody>
                </table>


                 </div>

            </div>
                 <div className="card">

                    <h3>Certificates</h3>
                    <p>Generate a certificate for each completed module. Complete all five to unlock the full programme certificate.</p>



                                 <br />           {/* Lecture Start */}
           <div className="card module"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="courseD">
                <div className="">
                  <h4>Module 1: Sustaining Humility & Advocacy</h4>
                  <p>Status: Completed</p>  
                </div>
                <div className="">
                 <button className='cta mini' style={{width:'auto'}}>Generate Certificate</button>
                </div>
                </div>
            
           </div>

                {/* Lecture End */}


                
                                            {/* Lecture Start */}
           <div className="card module"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="courseD">
                <div className="">
                  <h4>Module 2: Sustaining Humility & Advocacy</h4>
                  <p>Status: started</p>  
                </div>
                <div className="">
                 <button className='cta mini outlines' style={{width:'auto'}}>Generate Certificate</button>
                </div>
                </div>
            
           </div>

                {/* Lecture End */}


                 </div>

        </div>
        <div className="c">
            <div className="card">
                <h3>My progress</h3>
                <button className="cta mini outlines" style={{width:'auto', marginTop:10}} disabled>0 open Action</button>
                <button className="cta mini outlines" style={{width:'auto', marginTop:10}} disabled>0 Completed</button>

                <br /><br />


                   <div className="progress" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Modules Completed</h3>
            
            <div className="slid">
                <div className="Scont" style={{width:"10%"}}></div>
            </div>

            <p>Complete each core module to unlock certificates..</p>

<div className="flll">
 <button className="cta mini" style={{marginTop:10}} disabled>M1 Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M2 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M3 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M4 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M5 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M6 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M7 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M8 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M9 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M10 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M11 Not Started</button>
</div>

          </div>

            </div>
        </div>
        </div>
    </div>

    <Community/>

    </>
  )
}

export default DashboardPage