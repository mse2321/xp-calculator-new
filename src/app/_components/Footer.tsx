import React from "react";

const Footer: React.FC = () => (
  <footer style={{ textAlign: "center", padding: "1rem", background: "#f5f5f5" }}>
    <span>© {new Date().getFullYear()} XP Calculator. All rights reserved.</span>
  </footer>
);

export default Footer;