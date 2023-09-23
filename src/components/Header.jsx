import React, { Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ menuOpen, setMenuopen }) => {
  return (
    <div className="header">
      <nav>
        <NavContent />
      </nav>
      <button className="navBtn" onClick={() => setMenuopen(!menuOpen)}>
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export const NavContent = ({ setMenuopen }) => (
  <>
    <h2>Shivam Soni.</h2>
    <div>
      <a onClick={() => setMenuopen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuopen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuopen(false)} href="#timeline">
        Timeline
      </a>
      <a onClick={() => setMenuopen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuopen(false)} href="#testimonial">
        Testimonial
      </a>
      <a onClick={() => setMenuopen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:imsonishivam@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
