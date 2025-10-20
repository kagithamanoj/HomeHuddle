import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home Maintenance" },
  { to: "/pet", label: "Pet Care" },
  { to: "/shared-living", label: "Shared Living" }
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <aside style={{
      background: "#f0f4f8",
      width: 220,
      minHeight: "100vh",
      paddingTop: "2rem"
    }}>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {links.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              style={{
                display: "block",
                padding: "1rem",
                color: pathname === link.to ? "#006b8f" : "#444",
                fontWeight: pathname === link.to ? 700 : 400,
                textDecoration: "none"
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
