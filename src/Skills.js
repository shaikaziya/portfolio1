import './skills.css';
import {Skillsmap} from "./Skillsmap"
export function Skills(){
    const skills=[
        {
            name:"HTML",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        },
        {
            name:"CSS",
            image:"https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8-320-80.jpg", 
        },
        {
            name:"Python",
            image:"https://mpng.subpng.com/20180720/ur/kisspng-logo-brand-font-python-5b51d2136c4285.3422375115320888514434.jpg",  
        },
        {
        name:"JavaScript",
        image:"https://static.javatpoint.com/images/javascript/javascript_logo.png", 
    },
    {
        name:"Mongodb",
        image:"https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
    },
    {
        name:"React",
        image:"https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg",
    },
    {
        image:"https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
        name:"NodeJs"
    },
    {
        name:"Mysql",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKFbEqburXXqhsiuVpNlKyuoIRp7Hm2QLBw&usqp=CAU",
    },
    {
        name:"Bootstrap",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
    },
    {
    name:"Django",
    image:"https://res.cloudinary.com/practicaldev/image/fetch/s--iEmy2OHM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4bv6tjo2s9zq7oycou2x.jpeg"
    }
]

return(
        <div>
        <h1>Skills</h1>
        <div className="Skillsmapimage">
            {skills.map((ele)=>(
                <Skillsmap image={ele.image} name={ele.name} alt=""/>
            ))}
        </div>
        </div>
    )
}