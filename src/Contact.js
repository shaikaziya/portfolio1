import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Toolbar from "@mui/material/Toolbar";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './App.css';

export function Contact(){
    const Navigate = useNavigate();
    return(
        <div>
           <h1>Contact</h1>
            <div className='textfield'>
            
                <TextField style={{width:500}} id="filled-basic" label="Enter your name" variant="filled" /><br></br><br></br>
                <TextField style={{width:500}} id="filled-basic" label="Enter your email" variant="filled" /> <br></br><br></br>
                <TextField style={{width:500}} id="filled-basic" label="Phone number" variant="filled" /><br></br><br></br>
                <Button style={{width:500}}
                onClick={()=>Navigate("/contact")}
                variant="contained" color="primary" id="sub">Submit</Button>
            </div><br></br>
        <Toolbar id="toolbar">
          <Button id="button1" color="info" >
          <FacebookIcon/>
          </Button>
          <Button id="button1" color="success" >
          <WhatsAppIcon/>
          </Button>
          <Button id="button1" color="inherit">
        <GitHubIcon />
          </Button>
          <Button id="button1" color="primary" >
           <LinkedInIcon/>
          </Button>
          <Button id="button1" color="secondary" >
            <InstagramIcon id="i1"/>
          </Button>
          <Button id="button1" color="warning">
            <EmailIcon/>
          </Button>
        </Toolbar>
        
        </div>
    );
}