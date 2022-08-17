import Button from '@mui/material/Button';
export function Projectsmap({image,description,application}){
    return(
        <div>
            <div className="projects">
                <img className="projectsimage" src={image} alt=""></img>
                <p>{description}</p>
                <p>{application}</p>
                <Button color="primary" style={{width:220}}  variant="contained">Open</Button>
            </div>
        </div>
    );
}
