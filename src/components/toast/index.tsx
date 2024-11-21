import React from "react";
export interface ToastProps {
  message: string;
  type?: "info" | "success" | "error";
  onClose: () => void;
}
const Toast: React.FC<ToastProps> = ({ message, type = "info", onClose }) => {
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
};

export default Toast;
