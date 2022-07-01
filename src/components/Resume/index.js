import React from "react";
import resume from "../../assets/Resume/Resume.pdf";
import './resume-style.css';


function Resume() {
    return(
        <section>
            <div className= "align">
                <div>
                    <a href={require("../../assets/Resume/Resume.pdf")} download>
                        <button target="_blank" className="mt-2">
					        Click here to Download Resume
			            </button>
                    </a>
                </div>
            </div>
             
        </section>

    );
}
export default Resume;