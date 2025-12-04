import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Make sure you have this for currentUser
import AppLogo from "./assets/new logo.png";
import "./learning.css";

const QuizPage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // typewriter animation

  // Fetch quizzes
  useEffect(() => {
    const quizRef = collection(db, "modules", moduleId, "quizzes");
    const unsub = onSnapshot(quizRef, (snap) => {
      const quizList = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setQuestions(quizList);
    });
    return () => unsub();
  }, [moduleId]);

  // Typewriter animation
  useEffect(() => {
    if (!questions[current]) return;
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + questions[current].question.charAt(index));
      index++;
      if (index >= questions[current].question.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [current, questions]);

  const selectAnswer = (optionIndex) => {
    setAnswers({ ...answers, [questions[current].id]: optionIndex });
  };


  const submitAnswer = async () => {
  if (current < questions.length - 1) {
    setCurrent(current + 1);
  } else {
    // Calculate score
    let sc = 0;
    questions.forEach((q) => {
      const correctIndex = q.correct ? q.correct.charCodeAt(0) - 65 : -1; // A=>0, B=>1
      if (answers[q.id] === correctIndex) sc++;
    });
    setScore(sc);
    setSubmitted(true);

    // Calculate percentage
    const percent = Math.round((sc / questions.length) * 100);

    // If passed (>=80%), add to completedLearning
    if (percent >= 80 && currentUser) {
      try {
        await addDoc(collection(db, "completedLearning"), {
          moduleId: moduleId,
          userId: currentUser.uid,
          score: sc,
          percentage: percent,
          completedAt: new Date(),
        });
        console.log("Added to completedLearning");
      } catch (err) {
        console.error("Error adding completedLearning:", err);
      }
    }
  }
};



  if (questions.length === 0) return <p>Loading quiz...</p>;

  const q = questions[current] || {};
  const options = q.options ? Object.values(q.options) : [];

  return (
    <section className="layout learning" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <img src={AppLogo} alt="" />
        <div className="lessons">
          {questions.map((question, idx) => (
            <div
              key={idx}
              className={`lesson ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
            >
              <p>Q{idx + 1}</p>
              <div className="progres">
                {answers[question.id] != null ? <ion-icon name="checkmark-done"></ion-icon> : "."}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Body */}
      <div className="body">
        {!submitted ? (
          <div className="learningTab">
            <h3>Question {current + 1} of {questions.length}</h3>
            <p className="typewriter">{displayedText}</p>

            <div className="quiz-options">
              {options.map((opt, idx) => (
                <label
                  key={idx}
                  className={`quiz-option cta ${answers[q.id] === idx ? "cta" : "outlines"}`}
                  style={{ display: "block", margin: "5px 0", cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name={`quiz-${q.id}`}
                    checked={answers[q.id] === idx}
                    onChange={() => selectAnswer(idx)}
                    style={{ display: "none" }}
                  />
                  ({String.fromCharCode(65 + idx)}) {opt}
                </label>
              ))}
            </div>

            <button className="cta mini" style={{ width: 200 }} onClick={submitAnswer}>
              {current < questions.length - 1 ? "Next Question" : "Submit Quiz"}
            </button>

            {/* Question navigation numbers */}
            <div className="question-nav" style={{ marginTop: 20, display: "flex", gap: "5px" }}>
              {questions.map((_, idx) => (
                <button
                  key={idx}
                  className={`cta mini ${idx === current ? "active" : "outlines"}`}
                  onClick={() => setCurrent(idx)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="learningTab">
            <h3>Quiz Completed!</h3>
            <p>
              Score: <strong>{score}</strong> / {questions.length}
            </p>
            <p>
              Percentage: <strong>{Math.round((score / questions.length) * 100)}%</strong>
            </p>
            {Math.round((score / questions.length) * 100) >= 80 ? (
              <>
              <p>🎉 Congratulations! You passed. Your completion is recorded and ready for certificate.</p>
              <p>You can Generate Your Certificate From Your Dashboard</p></>
            ) : (
              <p>⚠️ You scored less than 80%. Please Learn agaiin and Come back.</p>
            )}
            <button className="cta mini" onClick={() => navigate('/dashboard')}>
              Dashboard
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizPage;
