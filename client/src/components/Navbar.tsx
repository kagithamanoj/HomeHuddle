import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      background: "#006b8f",
      color: "#fff",
      padding: "1rem"
    }}>
      <img src={Logo} alt="Home Huddle Logo" width={40} style={{ marginRight: 16 }} />
      <h2 style={{ marginRight: 32 }}>Home Huddle</h2>
      <Link to="/" style={navLink(pathname === "/")}>Home</Link>
      <Link to="/pet" style={navLink(pathname === "/pet")}>Pet Care</Link>
      <Link to="/shared-living" style={navLink(pathname === "/shared-living")}>Shared Living</Link>
    </nav>
  );
};

const navLink = (active: boolean): React.CSSProperties => ({
  color: active ? "#ffd180" : "#fff",
  marginRight: 24,
  textDecoration: "none",
  fontWeight: active ? 600 : 400,
  fontSize: "1rem"
});

export default Navbar;
