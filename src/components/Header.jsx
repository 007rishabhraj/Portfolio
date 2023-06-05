import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};
const NavContent = () => {
  return (
    <>
      <h2>Rishabh Raj</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:rishabhraj135007@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
