import classes from "./Footer.module.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiTwotoneFileWord } from "react-icons/ai";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <span>
          <a
            href="https://github.com/abhi784pat"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            <FaGithub size="2em" />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/abhishek-patel-7180321b9/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            <FaLinkedin size="2em" />
          </a>
        </span>
        <span>
          <a
            href="https://drive.google.com/file/d/1X7v7vdJ8jeJaD-wSIhApWIxPslM8mPeQ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            <AiTwotoneFileWord size="2em" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
