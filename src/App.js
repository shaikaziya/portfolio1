
import {Routes,Route} from "react-router-dom"
import {Home} from './Home'
import { About } from './About';
import { Skills } from './Skills';
import { ProjectsWorks } from './ProjectsWorks';
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
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ContactPageIcon from '@mui/icons-material/ContactPage';

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
        <h3>Shaik Aziya Sulthana</h3>
        <Button className="buttonstyle" style={{marginLeft:70}} color="inherit"  onClick={()=>{navigate("/")}}><HomeIcon/> Home</Button>
        <Button className="buttonstyle" color="inherit"  onClick={()=>{navigate("/about")}}><PersonOutlineIcon/> About</Button>
        <Button className="buttonstyle" color="inherit"  onClick={()=>{navigate("/skills")}}><LibraryBooksIcon/> Skills</Button>
        <Button className="buttonstyle" color="inherit"  onClick={()=>{navigate("/work")}}><ViewComfyIcon/> Projects</Button>
        <Button className="buttonstyle" color="inherit"  onClick={()=>{navigate("/contact")}}><ContactPageIcon/> Contact</Button>
        <Button
        style={{marginLeft:200}} className="buttonstyle"
        color="inherit"  onClick={()=>{setMode(mode==="light"?"dark":"light")}}>{mode==="light"?"dark":"light"} Mode</Button>
        {mode=== "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </Toolbar>
      </AppBar>

       <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/about" element={<About />}/>
          <Route  path="/skills" element={<Skills  />}/>
          <Route  path="/work" element={<ProjectsWorks />}/>
          <Route  path="/contact" element={<Contact />}/>
      </Routes> 
     
    </div>
    </ ThemeProvider>
  );
}
export default App;
