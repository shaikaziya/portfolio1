// import Button from '@mui/material/Button';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';


import { Routes, Route} from "react-router-dom";

import "./App.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skill from "./Components/Skills";
import { useState} from "react";
import {useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';

function App() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");
 const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const styles = {
    marginLeft: "300px"
}

const navstyles = {
  marginLeft:"300px",
  // marginRight:"30px"
}

  return (
<ThemeProvider theme={theme}>
      <Paper style={{borderRadius: 0, minHeight: "100vh"}}elevation={24} >
 
      <div className="App">


 <AppBar position="static">
 <Toolbar style={navstyles}>
  <Button color="inherit" 
  onClick={() => navigate("/")}>HOME</Button>
  <Button color="inherit" 
  onClick={() => navigate("/About")}>ABOUT</Button>
  <Button color="inherit" 
  onClick={() => navigate("/Skills")}>SKILLS</Button>
  <Button color="inherit" 
  onClick={() => navigate("/Projects")}>PROJECTS</Button>
    <Button color="inherit" 
  onClick={() => navigate("/Contact")}>CONTACT</Button>
   <Button 
   startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
   color="inherit" style= {styles}
   onClick={() => setMode( mode === "light" ? "dark" : "light")}> {mode === "light" ? "dark" : "light"} Mode</Button>
  </Toolbar>
 </AppBar>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Skills" element={<Skill />} />
    <Route path="/Projects" element={<Projects  />} />
    <Route path="/Contact" element={<Contact  />} />
          </Routes>  
  </div>
  </Paper>
     </ThemeProvider>

  );
}

export default App;