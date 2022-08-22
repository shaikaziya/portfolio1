
export function Skillsmap({name,image}){
    return(
        <div > 
            <div > 
            <img className="image"  src={image} alt=""></img>
            <h4 className="skillname">{name}</h4>
            </div>
            </div>
    )
}

