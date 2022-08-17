import './App.css';
export function Skillsmap({name,image}){
    return(
        <div > 
            <div > 
            <img className="image"  src={image} alt=""></img>
            <h4>{name}</h4>
            </div>
            </div>
    )
}

