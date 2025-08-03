import React, { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 1.5rem",
        background: "#222",
        color: "#fff",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: 40, marginRight: 12 }}
        />
        <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          XP Calculator
        </span>
      </div>

      {/* Profile Hamburger Menu */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
          }}
          aria-label="Open profile menu"
        >
          <FaUserCircle style={{ marginRight: 8 }} />
          <FaBars />
        </button>
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "calc(100% + 8px)",
              background: "#333",
              borderRadius: 6,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              minWidth: 140,
              zIndex: 10,
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: "0.5rem 0" }}>
              <li>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    width: "100%",
                    padding: "0.5rem 1rem",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    width: "100%",
                    padding: "0.5rem 1rem",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;