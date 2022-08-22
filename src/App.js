
import {Routes,Route} from "react-router-dom"
import {Home} from './Home'
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
// import Avatar from '@mui/material/Avatar';
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
        {/* <Avatar alt="Remy Sharp" src="http://images4.fanpop.com/image/photos/22100000/The-letter-A-the-letter-a-22186960-2560-2560.jpg" /> */}
        <h1>Shaik Aziya Sulthana</h1>
        <Button style={{marginLeft:150}} color="inherit"  onClick={()=>{navigate("/")}}><HomeIcon/> Home</Button>
        <Button  style={{marginLeft:20}} color="inherit"  onClick={()=>{navigate("/about")}}><PersonOutlineIcon/> About</Button>
        <Button style={{marginLeft:20}} color="inherit"  onClick={()=>{navigate("/skills")}}><LibraryBooksIcon/> Skills</Button>
        <Button style={{marginLeft:20}} color="inherit"  onClick={()=>{navigate("/work")}}><ViewComfyIcon/> Projects</Button>
        <Button style={{marginLeft:20}} color="inherit"  onClick={()=>{navigate("/contact")}}><ContactPageIcon/> Contact</Button>
        {/* <Button color="inherit"  onClick={()=>{navigate("/blog")}}> Blog</Button> */}
        <Button
        style={{marginLeft:300}}
        color="inherit"  onClick={()=>{setMode(mode==="light"?"dark":"light")}}>{mode==="light"?"dark":"light"} Mode</Button>
        {mode=== "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </Toolbar>
      </AppBar>

       <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/about" element={<About />}/>
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
