// function Projects() {
//   return (
//     <div>
//       <h1 className="project">Projects</h1></div>
//   )
// }

// export default Projects
import React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../Styles/Projects.css";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

function Projects() {
  return (
    <>
      <div class="box">
        <div class="container">
          <div class="row">
            <h1 className="project">PROJECTS</h1>

            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src="https://media1.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif" alt={project1} />
                <h5>Chat App</h5>
                
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB,Socket.io
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href=""
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href=""
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href=""
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    LIVE
                  </Button>
                </div>
              </div>
            </div>

           


            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src="https://media1.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif" alt={project1} />
                <h5>Chat App</h5>
                
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB,Socket.io
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href=""
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href=""
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href=""
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    LIVE
                  </Button>
                </div>
              </div>
            </div>




            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src="https://media1.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif" alt={project1} />
                <h5>Chat App</h5>
                
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB,Socket.io
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href=""
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href=""
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href=""
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    LIVE
                  </Button>
                </div>
              </div>
            </div>



            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src="https://media1.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif" alt={project1} />
                <h5>Movie App</h5>
                
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/my-projects"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/Node-Express-Nodemon"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://unrivaled-nougat-1b89c6.netlify.app/"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    LIVE
                  </Button>
                </div>
              </div>
            </div>




       
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
