import React from 'react';

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="success-popup">
      <div className="success-message">{message}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default SuccessPopup;
