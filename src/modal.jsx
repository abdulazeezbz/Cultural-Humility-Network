import { useState } from "react";
import "./modal.css";

export default function Modal({ isOpen, onClose, children, home  }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 350); // match animation time
  };

  if (!isOpen && !closing) return null;

  return (
     <div className={`modal ${home ? "home-modal" : ""}`}>
      <div className="modal-overlay" onClick={handleClose}>
        <div
          className={`modal-content ${closing ? "close" : "open"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
