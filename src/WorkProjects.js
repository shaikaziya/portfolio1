import "./projects.css"
import {Projectsmap} from "./Projectsmap"
export function WorkProjects(){
    const projects=[{
        application:"application1",
        description:"description1",
        image:"https://cdn.pixabay.com/photo/2017/01/17/15/24/network-1987209__340.jpg"
    },
    {
        application:"application2",
        description:"description2",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSite5aL1_cr1UfsIwEk13-NMCQDuQt1alMqg&usqp=CAU"
    },
    {
        application:"application3",
        description:"description3",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAWX2pJ9KAriTADnaQHCqbfio86Gt6OyEVQ&usqp=CAU"
    }
]
    return(         
        <div>
            <h1>Projects</h1>
            <div className="projectimage">
            {projects.map((proj)=>
            <Projectsmap application={proj.application} description={proj.description} image={proj.image}  />
            )}
        </div>
      </div>
    )
}

       