import React from "react";

const Footer: React.FC = () => (
  <footer style={{
    marginTop: "auto",
    padding: "1.5rem 0",
    background: "#006b8f",
    color: "#fff",
    textAlign: "center"
  }}>
    © {new Date().getFullYear()} Home Huddle. All rights reserved.
  </footer>
);

export default Footer;
