import React from "react";
import Button from "@mui/material/Button";

import "../Styles/About.css";
import about from "../images/about.svg";
const About = () => {
  return (
    <div className="abt">
      <div className="abt-left">
        <div className="abt-card">
          <img className="abt-img" src={about} alt={about} />
        </div>
      </div>
      <div className="abt-right">
        <h1 className="abt-title">ABOUT ME</h1>
        <p className="abt-sub">
          I'm a{" "}
          <span style={{ color: "#316EB6", fontSize: "45px" }}>
            Full Stack Developer/MERN Stack Developer
          </span>
        </p>
        <p className="abt-desc">
          I seek to work in a competitive field and ready to accept the
          challenges, utilizing my skills, would like to work with a highly
          esteemed company which gives me a platform to use my expertise and
          skills for mutual growth and benefit of company and myself.
        </p>
        <div className="resume">
          <Button
            target="_blank"
            href="https://drive.google.com/file/d/1kkSuKWxxiJ1lSR8WKuYEs0M6Hv9tY2kr/view?usp=share_link"
            rel="noreferrer"
            size="large"
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
