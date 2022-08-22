
import "./home.css"
export function Home(){
    const styles={
               width:"200px",
               height:"200px",
               marginTop:"15px",  
    }
    return(
        <div id="home">
            <div>
                <img style={styles} id="profileimage" src="http://images4.fanpop.com/image/photos/22100000/The-letter-A-the-letter-a-22186960-2560-2560.jpg" alt=""></img>
                <h1 id="profilename"><b>Hi I'am Shaik Aziya Sulthana</b></h1>
                <p id="profilename">Full Stack Developer</p>
               
            </div>
        </div>
    )
}
