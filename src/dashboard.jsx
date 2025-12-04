import React, {useState, useEffect} from 'react'
import TopNav from './topnava'

import { db } from "./firebase";
import { collection, addDoc, getDoc , onSnapshot, deleteDoc, doc, getDocs    } from "firebase/firestore";


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

      // Compute counts based on dates
      const now = new Date();
      let openCount = 0;
      let completedCount = 0;

      list.forEach((item) => {
        const commitDate =
          item.date instanceof Date
            ? item.date
            : item.date?.toDate
            ? item.date.toDate()
            : new Date(item.date);

        if (commitDate < now) {
          completedCount++;
        } else {
          openCount++;
        }
      });

      setOpen(openCount);
      setCompleted(completedCount);
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

const [open, setOpen] = useState(0);
const [completed, setCompleted] = useState(0);

useEffect(() => {
  const load = async () => {
    const { open, completed } = await getCommitmentCounts(currentUser.uid);
    setOpen(open);
    setCompleted(completed);
  };

  load();
}, [currentUser]);

const getCommitmentCounts = async (userId) => {
  const commitmentRef = collection(db, "users", userId, "commitments");
  const snapshot = await getDocs(commitmentRef);

  let open = 0;
  let completed = 0;

    
  const now = new Date();

  snapshot.forEach((doc) => {
    const data = doc.data();

    // Extract date (handle Firestore Timestamp or string)
    const commitDate =
      data.date instanceof Date
        ? data.date
        : data.date?.toDate
        ? data.date.toDate()
        : new Date(data.date);

    if (commitDate < now) {
      completed++;
    } else {
      open++;
    }
  });

  return { open, completed };
};


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
        status: "upcoming",
        done: false,
      }
    );

    alert("Saved!");

    // FIX: update counts after saving
    const counts = await getCommitmentCounts(currentUser.uid);
    setOpen(counts.open);
    setCompleted(counts.completed);

    setCommitment("");
    setDate("");

  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};




useEffect(() => {
  if (!currentUser) return;

  getCommitmentCounts(currentUser.uid).then((counts) => {
    setOpen(counts.open);
    setCompleted(counts.completed);
  });
}, [currentUser]);




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








const [modules, setModules] = useState([]);
  const [userProgress, setUserProgress] = useState({});
  const [overallPercent, setOverallPercent] = useState(0);

  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;

      // Fetch all modules
      const modulesSnap = await getDocs(collection(db, "modules"));
      const modulesList = modulesSnap.docs.map((doc) => ({
        id: doc.id,
        lessonCount: doc.data().lessonCount || 0, // store total lessons in module
        title: doc.data().title,
        description: doc.data().description,
      }));
      setModules(modulesList);

      // Fetch user progress
      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);
      const progressData = userSnap.exists() ? userSnap.data().progress || {} : {};
      setUserProgress(progressData);

      // Calculate overall percent across all modules
      let totalLessons = 0;
      let totalCompleted = 0;

      modulesList.forEach((mod) => {
        const completed = progressData[mod.id]?.completedLessons || [];
        totalLessons += mod.lessonCount;
        totalCompleted += completed.length;
      });

      const percent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;
      setOverallPercent(percent);
    };

    fetchData();
  }, [currentUser]);

  








  useEffect(() => {
  if (!currentUser) return;

  const fetchCompleted = async () => {
    const q = collection(db, "completedLearning");

    const snap = await getDocs(q);

    // Filter by current user and only those with 100%
    const list = snap.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(item => item.userId === currentUser.uid && item.percentage === 100);

    setCompletedModules(list);
  };

  fetchCompleted();
}, [currentUser]);


const [moduleMap, setModuleMap] = useState({});

useEffect(() => {
  const loadModules = async () => {
    const ms = await getDocs(collection(db, "modules"));
    let temp = {};
    ms.forEach(d => {
      temp[d.id] = { title: d.data().title, description: d.data().description };
    });
    setModuleMap(temp);
  };
  loadModules();
}, []);




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
              style={{width:'auto', margin:5, padding:"0px 10px"}}
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
                    <p>Generate a certificate for each completed module. Complete all to unlock the full programme certificate.</p>



                                 <br /> 
                                 
                                 
                                           {/* Lecture Start */}
        
        {completedModules.length === 0 && (
  <p>No completed modules yet.</p>
)}

{completedModules.map((item) => {
  const mod = moduleMap[item.moduleId] || {};

  return (
    <div className="card module" key={item.id} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
      <div className="courseD">
        
        <div>
          <h4>{mod.title || "Module Title"}</h4>
          <p>Status: Completed</p>
          <p>Score: {item.score}</p>
          <p>Completed At: {item.completedAt?.toDate().toLocaleString()}</p>
        </div>

        <div>
          <button
            className="cta mini"
            style={{ width: "auto" }}
           onClick={() => navigate(`/certificate/${item.id}`)} 
            >
            Generate Certificate
          </button>
        </div>

      </div>
    </div>
  );
})}

                {/* Lecture End */}


                
                                       

                 </div>

        </div>
        <div className="c">
            <div className="card">
                <h3>My progress</h3>
                <button className="cta mini outlines" style={{width:'auto', marginTop:10}} disabled> {open} open Action</button>
                <button className="cta mini outlines" style={{width:'auto', marginTop:10}} disabled> {completed} Completed</button>

                <br /><br />


                   <div className="progress" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Modules Completed</h3>
            
              <div className="slid">
        <div className="Scont" style={{ width: `${overallPercent}%` }}></div>
      </div>

      <p>{overallPercent}% completed across all modules</p>
      <p>Complete each core module to unlock certificates.</p>

<div className="flll">
 <button className="cta mini" style={{marginTop:10}} disabled>M1 Get Started</button>
 <button className="cta mini outlines"
  style={{marginTop:10}} disabled>M1 Get Started</button>

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