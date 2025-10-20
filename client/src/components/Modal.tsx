import React, { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1300
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 8,
        width: 400,
        maxWidth: "95vw",
        padding: "2rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
      }}>
        {title && <h3 style={{marginTop:0}}>{title}</h3>}
        <div>{children}</div>
        <button onClick={onClose} style={{
          marginTop: 24,
          background: "#006b8f",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          padding: "0.5rem 1rem",
          cursor: "pointer"
        }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
