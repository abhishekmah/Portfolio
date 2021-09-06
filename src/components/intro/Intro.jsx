import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web Developer", "Blogger"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="abhishek.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, My Name Is </h2>
          {/* <img src="wave.gif" height="70px" width="90px"/> */}
          <h1>Abhishek Mahato</h1>
          <h3>
             <span ref={textRef}></span>
          </h3>
          <br />
          <div className="contact">
            <a href="https://github.com/abhishekmah"><FaGithub className="icon"/></a>
            <a href="https://twitter.com/honest_Coder"><FaTwitterSquare className="icon"/></a>
            <a href="https://www.linkedin.com/in/abhishekmah/"><GrLinkedin className="icon"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}