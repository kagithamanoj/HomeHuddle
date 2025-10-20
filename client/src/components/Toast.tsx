import React from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
};

const colors = {
  success: "#4caf50",
  error: "#e53935",
  info: "#2196f3"
};

const Toast: React.FC<ToastProps> = ({ message, type = "info", onClose }) => (
  <div style={{
    position: "fixed",
    bottom: 32,
    right: 32,
    background: colors[type],
    color: "#fff",
    padding: "1.25rem 2rem",
    borderRadius: 6,
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
    zIndex: 1000,
    transition: "opacity 0.3s"
  }}>
    <span>{message}</span>
    <button onClick={onClose} style={{
      marginLeft: 24,
      background: "transparent",
      color: "#fff",
      border: "none",
      fontSize: 20,
      cursor: "pointer"
    }} aria-label="Close">
      ×
    </button>
  </div>
);

export default Toast;
