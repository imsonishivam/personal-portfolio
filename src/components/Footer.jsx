import React from "react";
import me from "../assets/me3.jpg";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="" />
        <h2>Shivam Soni</h2>
        <p>React Developer</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a target={"blank"} href="https://www.linkedin.com/in/imsonishivam">
            <AiFillLinkedin />
          </a>
          <a target={"blank"} href="https://www.github.com/imsonishivam">
            <AiFillGithub />
          </a>
          <a target={"blank"} href="https://www.instagram.com/imsonishivam">
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
