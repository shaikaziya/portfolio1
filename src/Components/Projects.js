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
                <img className="img" src="https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?w=740&t=st=1679298571~exp=1679299171~hmac=3695d083b148dd2526a6c6e3b2a2c28af863b733ccbc3de30d49f0b53c6bc8b0" alt={project1} />
                <h5>Quiz-App</h5>
                
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    Mongo DB, Express JS, Node JS, React JS
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/quiz_app_client"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Front-end
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/quiz_app_server"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Back-end
                  </Button>
                 
                  <Button
                    target="_blank"
                    href="https://quiz-app-client-sable.vercel.app/"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Live site
                  </Button>
                </div>
              </div>
            </div>


            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src="https://cdn.dribbble.com/users/1894420/screenshots/11700268/media/1ad21c9ccda8d2875edf5cfad781fd2d.gif" alt={project1} />
                <h5>Google Meet Clone</h5>
                
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    Mongo DB, Express JS, Node JS, React JS, Bootstrap, Material UI, Peer JS, WebRTC
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/meet_clone_frontend"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Front-end
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/meet_clone_backend"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Back-end
                  </Button>
                 
                  <Button
                    target="_blank"
                    href="https://meet-clone-frontend.vercel.app/"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Live site
                  </Button>
                </div>
              </div>
            </div>


            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src="https://tse3.mm.bing.net/th?id=OIP.IJZCtEWDNVRwqH6fctIFjwHaFj&pid=Api&P=0" alt={project1} />
                <h5>Expense Management App</h5>
                
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    Mongo DB, Express JS, Node JS, React JS, Ant Design, Bootstrap, Context API
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/expense_management_app_MERN"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Front-end
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/expense_management_app_MERN"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Back-end
                  </Button>
                 
                  <Button
                    target="_blank"
                    href="https://expense-management-app-mern.vercel.app/"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Live site
                  </Button>
                </div>
              </div>
            </div>

       




            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src="https://tse3.mm.bing.net/th?id=OIP.qK9F1E1iB3piswkWTBWRPwHaEK&pid=Api&P=0" alt={project1} />
                <h5>E-Commerce Cart</h5>
                
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    Mongo DB, Express JS, Node JS, React JS, Bootstrap, Paypal, Redux
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/mern-e-commerce-app-frontend"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Front-end
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/shaikaziya/mern-e-commerce-app-backend"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Back-end
                  </Button>
                 
                  <Button
                    target="_blank"
                    href="https://mern-e-commerce-app-frontend.vercel.app/"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    Live site
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
