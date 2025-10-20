import React from "react";

const Loader: React.FC = () => (
  <div style={{
    width: "100%",
    padding: "2rem",
    textAlign: "center"
  }}>
    <svg width="36" height="36" viewBox="0 0 36 36" aria-label="Loading" style={{ marginBottom: 8 }}>
      <circle
        cx="18" cy="18" r="16"
        stroke="#006b8f"
        strokeWidth="4"
        fill="none"
        strokeDasharray="100"
        strokeDashoffset="33"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <span>Loading...</span>
  </div>
);

export default Loader;
