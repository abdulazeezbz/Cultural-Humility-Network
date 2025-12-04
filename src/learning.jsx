import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./AuthContext"; // assuming you have auth

import "./learning.css";
import AppLogo from "./assets/new logo.png";

const LearningPage = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();

  const { currentUser } = useAuth();
  const [moduleData, setModuleData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [activeLesson, setActiveLesson] = useState(null);
  const [progress, setProgress] = useState([]);
  const [showQuizButton, setShowQuizButton] = useState(false);

  // Fetch module info
  useEffect(() => {
    const fetchModule = async () => {
      const moduleRef = doc(db, "modules", moduleId);
      const snapshot = await getDoc(moduleRef);
      if (snapshot.exists()) {
        setModuleData(snapshot.data());
      } else {
        console.error("Module not found");
      }
    };
    fetchModule();
  }, [moduleId]);

  // Fetch lessons live
  useEffect(() => {
    const lessonRef = collection(db, "modules", moduleId, "lessons");

    const unsub = onSnapshot(lessonRef, (snap) => {
      const list = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a, b) => a.order - b.order);

      setLessons(list);
      if (!activeLesson && list.length > 0) setActiveLesson(list[0]); // first lesson
    });

    return () => unsub();
  }, [moduleId]);

  // Fetch progress live
  useEffect(() => {
    if (!currentUser) return;

    const docRef = doc(db, "users", currentUser.uid);
    const unsub = onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const modProgress = data?.progress?.[moduleId]?.completedLessons || [];
      setProgress(modProgress);
    });

    return () => unsub();
  }, [moduleId, currentUser]);
// Mark lesson completed and update percent
const markCompleted = async (lessonId) => {
  if (!currentUser) return alert("Login first.");

  // Update local progress immediately
  if (!progress.includes(lessonId)) {
    setProgress((prev) => [...prev, lessonId]);
  }

  // Find index of current lesson
  const currentIndex = lessons.findIndex((l) => l.id === lessonId);

  // Fetch user data
  const userRef = doc(db, "users", currentUser.uid);
  const userSnap = await getDoc(userRef);
  const data = userSnap.exists() ? userSnap.data() : {};

  const existing = data?.progress?.[moduleId]?.completedLessons || [];
  if (existing.includes(lessonId)) return;

  // Calculate percent completion
  const totalLessons = lessons.length;
  const completedLessons = [...existing, lessonId];
  const percent = Math.round((completedLessons.length / totalLessons) * 100);

  // Update progress in Firebase
  const updatedProgress = {
    ...data?.progress,
    [moduleId]: {
      completedLessons,
      percent,
    },
  };

  await updateDoc(userRef, { progress: updatedProgress });

  // Move to next lesson automatically if it exists
  if (currentIndex < lessons.length - 1) {
    setActiveLesson(lessons[currentIndex + 1]);
  } else {
    // Last lesson completed — show "Go to Quiz" button
    setShowQuizButton(true); // create a new state: const [showQuizButton, setShowQuizButton] = useState(false);
  }
};


  const percent = lessons.length > 0 ? Math.round((progress.length / lessons.length) * 100) : 0;

  return (
    <section
      className="layout learning"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <img src={AppLogo} alt="" />

        <div className="lessons">
          {lessons.map((lesson, index) => {
            const isCompleted = progress.includes(lesson.id);
            const isActive = activeLesson?.id === lesson.id;

            return (
              <div
                key={lesson.id}
                className={`lesson ${isActive ? "active" : ""}`}
                style={{
                  background: isCompleted ? "var(--brand-1)" : isActive ? "#18a889ff" : "",
                  cursor: "pointer",
                }}
                onClick={() => setActiveLesson(lesson)}
              >
                <p>
                  Lesson {index + 1}: {lesson.title}
                </p>

                <div className="progres">
                  {isCompleted ? <ion-icon name="checkmark-done"></ion-icon> : "."}
                </div>
              </div>
            );
          })}

        {/* Quiz */}
<div
  className={`lesson ${percent === 100 ? "" : "locked"}`}
  onClick={() => {
    if (percent === 100) {
      navigate(`/quiz/${moduleId}`);
    } else {
      alert("Complete all lessons before starting the quiz.");
    }
  }}
  style={{
    cursor: percent === 100 ? "pointer" : "not-allowed",
    opacity: percent === 100 ? 1 : 0.5,
  }}
>
  <p>Quiz</p>
  <div className="progres">.</div>
</div>


        </div>
      </div>

      {/* Lesson Body */}
      <div className="body">
        {activeLesson ? (
          <>
            <div className="learningTab">
              <h3>{activeLesson.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: activeLesson.content }} />

              <br />
              <button
                className="cta mini"
                style={{ width: 200 }}
                onClick={() => markCompleted(activeLesson.id)}
              >
                Mark As Completed
              </button>

              {showQuizButton && (
  <button
    className="cta mini"
    style={{ width: 200, marginTop: 20 }}
    onClick={() => navigate(`/quiz/${moduleId}`)}
  >
    Go to Quiz
  </button>
)}

            </div>

            {/* Display Module Info */}
         {moduleData && (
  <div className="anoth card">
    <h3>{moduleData.title}</h3>
    <p>{moduleData.description}</p>
    <ul style={{ marginLeft: 7 }}>
      {Array.isArray(moduleData.details) &&
        moduleData.details.map((item, idx) => (
          <li key={idx}>
            <ion-icon name="checkmark-done-circle-outline"></ion-icon> {item}
          </li>
        ))}
    </ul>

    <br />
    <p>Progress</p>
    <div className="slid">
      <div
        className="Scont"
        style={{
          width: `${lessons.length > 0 ? (progress.length / lessons.length) * 100 : 0}%`,
          transition: "width 0.5s ease"
        }}
      ></div>
    </div>
    <p>{lessons.length > 0 ? Math.round((progress.length / lessons.length) * 100) : 0}% completed</p>
  </div>
)}
          </>
        ) : (
          <p>Loading lesson...</p>
        )}
      </div>
    </section>
  );
};

export default LearningPage;
