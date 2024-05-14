import React from "react";
import "./modal.css";

const Modal = ({
  isShown,
  text,
  confirmText,
  onConfirm,
}: {
  isShown: boolean;
  text: string;
  confirmText: string;
  onConfirm: () => void;
}) => {
  return (
    <div className="modal" style={{ display: isShown ? "block" : "none" }}>
      <div className="w-60 md:w-80">
        <div className="title-bar">
          <div className="title-bar-text" />
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onConfirm} />
          </div>
        </div>
        <div className="window h-20 text-center">
          <div className="content p-4">
            <p className="mb-2">{text}</p>
            <button onClick={() => onConfirm()}>{confirmText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
