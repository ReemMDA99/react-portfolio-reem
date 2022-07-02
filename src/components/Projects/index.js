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
    // if (!repos) return <div> Please Wait...</div>;
    
    return(
        <section>
            <h1>My Projects</h1>
            <ul>
                {
                    projects.map((projects, id) => (
                        <a href = {projects.html_url}>
                            <div> key= {id}</div>
                        </a>
                    ))
                }
            </ul>
        </section>
    );
}

export default Projects;