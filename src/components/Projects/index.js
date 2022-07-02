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
    
    // return();
}

export default Projects;