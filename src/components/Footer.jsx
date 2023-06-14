import React from "react";
import p from "../assets/pic.jpg"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={p}
          alt="Founder"
        />

        <h2>Rishabh Raj</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/rishabh-raj-bbb644232"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/_rajrishabh_/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/007rishabhraj" target={"blank"}>
            <AiFillGithub />
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
