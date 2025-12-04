import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, doc, getDocs, query, where, updateDoc, arrayUnion, orderBy } from "firebase/firestore";

const UnlockModuleModal = ({ onClose }) => {
  const [userEmail, setUserEmail] = useState("");
  const [selectedModule, setSelectedModule] = useState("");
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch modules
    const fetchModules = async () => {
      const q = query(collection(db, "modules"), orderBy("createdAt"));
      const snapshot = await getDocs(q);
      setModules(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchModules();
  }, []);

  const handleUnlock = async () => {
    if (!userEmail || !selectedModule) return alert("Enter email and select a module");
    setLoading(true);

    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", userEmail));
      const snapshot = await getDocs(q);

      if (snapshot.empty) return alert("User not found");

      const userDoc = snapshot.docs[0];
      const userRef = doc(db, "users", userDoc.id);

      await updateDoc(userRef, {
        unlockedModules: arrayUnion(selectedModule)
      });

      alert(`Module unlocked for ${userEmail}`);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error unlocking module");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h3>Unlock Module for User</h3>
<br />

<div className="inputGroup">
        <input 
         style={{width:'100%'}}
          type="email" 
          placeholder="User Email" 
          value={userEmail} 
          onChange={(e) => setUserEmail(e.target.value)} 
        />
 </div>


<div className="inputGroup">
 
        <select style={{width:'100%'}} value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
          <option value="">Select Module</option>
          {modules.map(mod => (
            <option key={mod.id} value={mod.id}>{mod.title}</option>
          ))}
        </select>
</div>
       

        <div className="modalActions">
          <button className="cta mini" onClick={handleUnlock}>
            {loading ? <div className="spinner"></div> : "Unlock Module"}
          </button>
          <button className="cta outlines mini" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnlockModuleModal;
