import './App.css';
export function Blog(){
    const styles={
        fontSize:"30px",
        marginTop:"10%",
        marginLeft:"40%",
    }
    return(
        <div>
            <div>
                <ul style={styles}>
                    <a style={{color:"#1aa3ff"}} href="https://medium.com/@shaikaziya1234/full-stack-development-92dff6c7700e">BLOG-Click Here</a>
                </ul>
            </div>
        </div>
    )
}