import { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const AddModuleModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detail1, setDetail1] = useState("");
  const [detail2, setDetail2] = useState("");
  const [isFree, setIsFree] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleAddModule = async () => {
    if (!title.trim()) return alert("Module Name is required.");

    setLoading(true);
    try {
      await addDoc(collection(db, "modules"), {
        title,
        description,
        details: [detail1, detail2],
        free: isFree,
        createdAt: serverTimestamp(),
      });
      alert("Module added successfully!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error adding module");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h3>Add New Module</h3><br />

<div className="inputGroup">
        <input 
          type="text" 
          placeholder="Module Name" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        
            </div>

            <div className="inputGroup">
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        </div>
    


        
<div className="inputGroup">
        <input 
          type="text" 
          placeholder="Detail 1" 
          value={detail1} 
          onChange={(e) => setDetail1(e.target.value)} 
        />

        </div>

        <div className="inputGroup">
        <input 
          type="text" 
          placeholder="Detail 2" 
          value={detail2} 
          onChange={(e) => setDetail2(e.target.value)} 
        />

        </div>


        
        <label>
          &nbsp; Free? {" "}
          <input 
            type="checkbox" 
            checked={isFree} 
            onChange={() => setIsFree(!isFree)} 
          />
        </label>

        <div className="modalActions">
          <button className="cta mini" onClick={handleAddModule}>
            {loading ? <div className="spinner"></div> : "Add Module"}
          </button>
          <button className="cta outlines mini" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModuleModal;
