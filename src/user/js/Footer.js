import React from "react";
import "../css/Footer.css"
const Footer = () => {
  const links = [
    "Help",
    "Status",
    "About",
    "Careers",
    "Press",
    "Blog",
    "Privacy",
    "Terms",
    "Text to Speech",
    "Teams",
  ];

  return (
    <footer className="footer">
    {links.map((link, index) => (
      <a key={index} href="#" className="footer-link">
        {link}
      </a>
    ))}
  </footer>
  );
};

export default Footer;
