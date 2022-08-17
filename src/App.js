import './App.css';
import {Routes,Route} from "react-router-dom"
import { About } from './About';
import { Skills } from './Skills';
import { WorkProjects } from './WorkProjects';
import { Contact } from './Contact';
import { Blog } from './Blog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { CssBaseline } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Avatar from '@mui/material/Avatar';

function App() {
  const navigate=useNavigate()
  const[mode,setMode]=useState("light")
  const theme = createTheme({
    palette: {
      mode:mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        <Avatar alt="Remy Sharp" src="http://images4.fanpop.com/image/photos/22100000/The-letter-A-the-letter-a-22186960-2560-2560.jpg" />
        <Button color="inherit"  onClick={()=>{navigate("/")}}>Home</Button>
        <Button color="inherit"  onClick={()=>{navigate("/skills")}}>Skills</Button>
        <Button color="inherit"  onClick={()=>{navigate("/work")}}>Projects</Button>
        <Button color="inherit"  onClick={()=>{navigate("/contact")}}>Contact</Button>
        <Button color="inherit"  onClick={()=>{navigate("/blog")}}>Blog</Button>
        <Button
        style={{marginLeft:600}}
        color="inherit"  onClick={()=>{setMode(mode==="light"?"dark":"light")}}>{mode==="light"?"dark":"light"} Mode</Button>
        {mode=== "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </Toolbar>
      </AppBar>

       <Routes>
          <Route  path="/" element={<About />}/>
          <Route  path="/skills" element={<Skills  />}/>
          <Route  path="/work" element={<WorkProjects />}/>
          <Route  path="/contact" element={<Contact />}/>
          <Route  path="/blog" element={<Blog />}/>
      </Routes> 
     
    </div>
    </ ThemeProvider>
  );
}
export default App;
