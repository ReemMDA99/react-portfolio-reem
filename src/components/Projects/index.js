import React, { useState, useEffect} from "react";
import "./projects-style.css";

function Projects() {
    const [projects, setProjects] = useState([]);
    
    
    useEffect(() => {
        fetch("https://api.github.com/users/ReemMDA99/starred?per_page=6")
        .then((response) =>
        response.json()
        ).then((data) => setProjects(data)
        );
    }, []);
    // if not the project then return the html response 
    if (!projects) return <div> Please Wait...</div>;
    
    return(
        <section>
            <h1>My Projects</h1>
            <ul>
                {
                    projects.map((projects, id) => (
                        <a href = {projects.html_url}>
                            <div key= {id}>
                                <div className="profiles">
                                    <img className="border-bottom border-dark"
                                    src={`https://raw.githubusercontent.com/ReemMDA99/${projects.name}/main/preview/screenshot.jpg`}
                                    alt={`${projects.name} `}/>
                                <div className= "profile-name">
                                    <h4>{projects.name}</h4>
                                    <p>{projects.description}</p>
                                </div>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </ul>
        </section>
    );
}


export default Projects;