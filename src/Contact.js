import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./contact.css";

export function Contact() {
  const Navigate = useNavigate();
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="contact-list">
        <div className="list">
        <h4>Call me <br></br><small>9701658255</small></h4>
        
        <h4>Email <br></br><small>shaikaziya1234@gmail.com</small></h4>
        
        <h4>Location <br></br> <small>Hyderabad,Telangana</small></h4>
       
      </div>
      
      <form className="textfield">
        <TextField
          style={{ width: 500 }}
        
          label="Enter your name"
          variant="filled"
        />
        <br></br>
        <br></br>
        <TextField
          style={{ width: 500 }}
          
          label="Enter your email"
          variant="filled"
        />{" "}
        <br></br>
        <br></br>
        <TextField
          style={{ width: 500 }}
         
          label="Phone number"
          variant="filled"
        />
        <br></br>
        <br></br>
        <Button
          style={{ width: 500 }}
          onClick={() => Navigate("/contact")}
          variant="contained"
          color="primary"
          id="sub"
        >
          Submit
        </Button>
      </form>

      <br></br>
     </div>
   <div >
      <Toolbar id="toolbar">
        <Button id="button1" color="inherit">
          <a href="https://github.com/shaikaziya" target="_blank">
            <GitHubIcon />
          </a>
        </Button>

        <Button id="button1" color="primary">
          <a
            href="https://www.linkedin.com/in/shaik-aziya-sulthana-6053b6249/" target="_blank">
            <LinkedInIcon />
          </a>
        </Button>
      </Toolbar>
      </div>
    </div>
  );
}
