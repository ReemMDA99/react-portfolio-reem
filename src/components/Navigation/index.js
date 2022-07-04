import React from "react";
import './nav-style.css';

function Navigation (props){
    const{
	thisCategory,
    setThisCategory
    } = props;

    return(
        <nav className="m-3">
			<ul className="flex-row mobile-view">
				<li className={thisCategory === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setThisCategory("about")}>About</span>
				</li>
				<li className={thisCategory === "projects" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setThisCategory("projects")}>Projects</span>
				</li>
				<li className={thisCategory === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setThisCategory("resume")}>Resume</span>
				</li>
				<li className={thisCategory === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setThisCategory("contact")}>Contact</span>
				</li>
			</ul>
		</nav>
	);

}

export default Navigation;