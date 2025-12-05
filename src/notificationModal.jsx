import React from "react";

const NotificationModal = ({ 
  onClose, 
  title = "Notification", 
  message = "Alert message here", 
  type = "default" // success, error, warning, default 
}) => {

  // Optional styling based on type
  const getColor = () => {
    switch (type) {
      case "success":
        return "#28a745";
      case "error":
        return "#dc3545";
      case "warning":
        return "#ffc107";
      default:
        return "#555";
    }
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalBox" onClick={(e) => e.stopPropagation()}>
        <h3 style={{ color: getColor() }}>{title}</h3>
        <p>{message}</p>

        <div className="modalActions">
          <button className="cta mini" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
