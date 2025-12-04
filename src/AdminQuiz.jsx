import { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const QuizModal = ({ moduleId, onClose }) => {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correct, setCorrect] = useState("A");
  const [loading, setLoading] = useState(false);

  const handleAddQuiz = async () => {
    if (!question.trim() || !optionA.trim() || !optionB.trim()) {
      alert("Fill in all required fields.");
      return;
    }

    setLoading(true);

    await addDoc(collection(db, "modules", moduleId, "quizzes"), {
      question,
      options: { A: optionA, B: optionB, C: optionC, D: optionD },
      correct,
      createdAt: serverTimestamp()
    });

    setLoading(false);
    alert("Quiz added!");
    onClose();
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h3>Add Quiz Question</h3>
<br />

        <div className="inputGroup">
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        </div>

        <div className="inputGroup">
        <input
          type="text"
          placeholder="Option A"
          value={optionA}
          onChange={(e) => setOptionA(e.target.value)}
        />
        </div>
        <div className="inputGroup">
        <input
          type="text"
          placeholder="Option B"
          value={optionB}
          onChange={(e) => setOptionB(e.target.value)}
        />
        </div>
        <div className="inputGroup">
        <input
          type="text"
          placeholder="Option C"
          value={optionC}
          onChange={(e) => setOptionC(e.target.value)}
        />
        </div>
        <div className="inputGroup">
        <input
          type="text"
          placeholder="Option D"
          value={optionD}
          onChange={(e) => setOptionD(e.target.value)}
        />
        </div>

        <label>Correct Answer:</label>
        
        <div className="inputGroup">
        <select style={{width:"100%"}} value={correct} onChange={(e) => setCorrect(e.target.value)}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        </div>

        <div className="modalActions">
          <button className="cta mini" onClick={handleAddQuiz}>
            {loading ? "Saving..." : "Add Quiz"}
          </button>
          <button className="cta outlines mini" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
