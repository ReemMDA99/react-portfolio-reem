import React from "react";
import resume from "../../assets/Resume/Resume.pdf";
import './resume-style.css';


function Resume() {
    return(
        <section>
            <div className= "align d-flex align-items-center flex-column">
                <div>
                    <a href={resume} download>
                        <button target="_blank" type="button" className="btn btn-primary btn-lg btn-block">
					        Download Resume
			            </button>
                    </a>
                </div>
                <div>
                   <h3>Technical Skills</h3>
                   <h4> Front-End Skills</h4> 
                   <ul>
                        <li> Html5</li>
                        <li> CSS3</li>
                        <li> JavaScript</li>
                        <li> APIs</li>
                        <li> jQuery</li>
                        <li> Bootstrap</li>
                    </ul>
                    <h4> Back-End/ Database Skills</h4>
                    <ul>
                    
                        <li> Node.js</li>
                        <li> Express.js</li>
                        <li> RESTful APIs</li>
                        <li> MySQL</li>
                        <li> MongoDB</li>
                        <li> Mongoose</li>
                        <li> Heroku</li>
                        <li> Web Packs</li>
                        <li> GitHub</li>
                        <li> Sequelize</li>
                        <li> Handlebars</li>
                        <li>OOP</li>
            
                    </ul>
                    <h4>Dev Tool Skills</h4>
				    <ul>
                        <li>Git</li>
                        <li>npm packages</li>
                        <li>Jest</li>
                        <li>Webpack</li>
				    </ul>
                    <h4> Specializations </h4>
                    <p> Specialized in Cloud Computing as Microsoft Azure Cloud Architect and Developer and AWS Sulutions Architect.
                    </p>
                </div>
            </div>
             
        </section>

    );
}
export default Resume;