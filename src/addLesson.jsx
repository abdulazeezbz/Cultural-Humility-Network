import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "./firebase";

import { collection, doc, 
  addDoc, getDoc, onSnapshot , getDocs, deleteDoc,
   orderBy, query, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";


// TipTap imports
import { EditorContent, useEditor } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

import StarterKit from "@tiptap/starter-kit";
import ATopNav from "./atn";
import QuizModal from "./AdminQuiz";
import NotificationModal from "./notificationModal";

const AdminLessons = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();


  const [moduleData, setModuleData] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);


const [showQuizModal, setShowQuizModal] = useState(false);
const [quizzes, setQuizzes] = useState([]);

useEffect(() => {
  const quizRef = collection(db, "modules", moduleId, "quizzes");

  const unsubscribe = onSnapshot(quizRef, (snapshot) => {
    const quizList = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setQuizzes(quizList);
  });

  return () => unsubscribe();
}, [moduleId]);





const [showAlert, setShowAlert] = useState(false);
const [LessonAlers, setLessonAlers] = useState(false)
const [alertTitle, setalertTitle] = useState("");
const [alertMessage, setalertMessage] = useState("");
const [type, settype] = useState("");







const handleDeletePost = async (quizId) => {
  if (!window.confirm("Are you sure you want to delete this quiz?")) return;

  try {
    await deleteDoc(doc(db, "modules", moduleId, "quizzes", quizId));
    setShowAlert(true);
    setalertTitle("Success");
    setalertMessage("Quiz Deleted Successfully");
    settype("success")

  } catch (error) {
    console.error(error);
    setShowAlert(true);
    setalertTitle("Oops!");
    setalertMessage("Failed To Delete Quiz");
    settype("error")
  }
};







  const Toolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="toolbar" style={{
      display: "flex",
      gap: "10px",
      marginBottom: "10px",
      flexWrap: "wrap",
      background: "#f2f2f2",
      padding: "10px",
      borderRadius: "8px"
    }}>


        <button
         className="cta"
  onClick={() => {
 
  }}
>
  <ion-icon name="image-outline"></ion-icon> not available
</button>

      <button onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "active" : "cta"}
      ><ion-icon name="logo-behance"></ion-icon> Bold</button>

      <button onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "active" : "cta"}
      ><ion-icon name="brush-outline"></ion-icon> Italic</button>

      <button onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "active" : "cta"}
      ><ion-icon name="cafe-outline"></ion-icon> Underline</button>

      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "active" : "cta"}
      ><ion-icon name="pint"></ion-icon> H2</button>


   

</div>
  );
};


const editor = useEditor({
  extensions: [
    StarterKit.configure({
      orderedList: false, // disable built-in
      bulletList: false,
      listItem: false,
    }),
    OrderedList,
    BulletList,
    ListItem,
    Underline,
    Image,
    Placeholder.configure({
      placeholder: "Write your lesson content here...",
    }),
  ],
  content: "",
});


  // Fetch module info
  useEffect(() => {
    const fetchModule = async () => {
      const moduleRef = doc(db, "modules", moduleId);
      const snapshot = await getDoc(moduleRef);
      if (snapshot.exists()) {
        setModuleData({ id: snapshot.id, ...snapshot.data() });
      } else {
        alert("Module not found");
        navigate("/");
      }
    };

    fetchModule();
  }, [moduleId, navigate]);

  // Fetch lessons
  useEffect(() => {
    const fetchLessons = async () => {
      const lessonsRef = collection(db, "modules", moduleId, "lessons");
      const q = query(lessonsRef, orderBy("createdAt", "asc"));
      const snapshot = await getDocs(q);
      const lessonList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLessons(lessonList);
      setLoading(false);
    };

    fetchLessons();
  }, [moduleId]);

  const handleAddLesson = async () => {
    const content = editor.getHTML();

    if (!title.trim() || !content.trim()) {
      alert("Title and content are required");
      return;
    }

    setSaving(true);

    try {
      const lessonsRef = collection(db, "modules", moduleId, "lessons");
      await addDoc(lessonsRef, {
        title,
        content, // HTML from TipTap
        duration: duration || "N/A",
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setDuration("");
      editor.commands.setContent("");


      setLessonAlers(true);
    setalertTitle("Success");
    setalertMessage("Lesson added successfully!");
    settype("success")


      // reload lessons
      const snapshot = await getDocs(query(lessonsRef, orderBy("createdAt", "asc")));
      const lessonList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLessons(lessonList);

    } catch (err) {
      console.error(err);
      alert("Failed to add lesson");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading module...</p>;

  
  return (

<>

        <ATopNav />

    <div className="content modules about" style={{textAlign:'left'}}  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
   
   
    <div className="adminLessons">
      <h2>Manage Lessons for: {moduleData.title}</h2>

      <div className="addLessonForm">
        <div className="card">

<br /><br />
           <div className="inputGroup">
             <input
          type="text"
          placeholder="Lesson Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        /></div> 


 <div className="inputGroup">
        <input
          type="text"
          placeholder="Duration (hours)"
          value={duration}
          onChange={e => setDuration(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        /></div>

<br />
<div className="tiptap-editor" style={{width:"95%", margin:'auto'}}>
  <Toolbar editor={editor} />
 
  <p>Enter Lesson Below</p>
  <EditorContent editor={editor} className="tiptap-content" /></div>
</div>

        <button className="cta mini" onClick={handleAddLesson} disabled={saving} style={{ marginTop: "10px" }}>
          {saving ? "Saving..." : "Add Lesson"}
        </button>

<br /><br />

      </div>

      <hr style={{ margin: "20px 0" }} />





      <h3>Existing Lessons</h3>

      
      {lessons.length === 0 && <p>No lessons added yet.</p>}

      {lessons.map((lesson, idx) => (
        <div key={lesson.id} className="card module" style={{ marginBottom: "10px" }}>
          <h4>{idx + 1}. {lesson.title}</h4>
          <p>Duration: {lesson.duration}</p>
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
        </div>
      ))}
    </div>
<br />


    <div className="card">
           
           <p>You Can Add Quiz Qestion From Here!</p><br /> <button 
  className="cta mini" 
  onClick={() => setShowQuizModal(true)} 
  style={{ marginLeft: "10px", width:'auto' }}
>
  Add Quiz
</button>
</div>

<h3>Quizes Total: ({quizzes.length})</h3>



{quizzes.length === 0 && <p>No quizzes added.</p>}

{quizzes.map((quiz, index) => (
  <div key={quiz.id} className="card module" style={{ marginBottom: "10px" }}>
    <h4>{index + 1}. {quiz.question}</h4>

    <ul>
      <li>A. {quiz.options.A}</li>
      <li>B. {quiz.options.B}</li>
      <li>C. {quiz.options.C}</li>
      <li>D. {quiz.options.D}</li>
    </ul>

    <p><strong>Correct:</strong> {quiz.correct}</p>

    
    <button    className="cta mini outlines"
                        style={{ width: "auto", margin: 5, padding: "0px 10px" }}
                        onClick={() => handleDeletePost(quiz.id)}>
                          
                          Delete</button>
  </div>
))}


<br /><br />



     </div>

     {showQuizModal && (
  <QuizModal
    moduleId={moduleId} 
    onClose={() => setShowQuizModal(false)}
  />
)}


{showAlert && (
  <NotificationModal
    onClose={() => setShowAlert(false)}
    title={alertTitle}
    message={alertMessage}
    type={type}
  />
)}

{LessonAlers && (
  <NotificationModal
    onClose={() => setLessonAlers(false)}
    title={alertTitle}
    message={alertMessage}
    type={type}
  />
)}

     </>
  );
};

export default AdminLessons;
