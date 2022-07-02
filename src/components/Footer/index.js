import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./footer-style.css";

const Footer = () => {
    return (
        <footer>
            <a target="blank" rel= "noopener noreferrer" href="https://www.linkedin.com/in/reem-mohammed-ahmed-55a519225/">
            <i class="fa fa-linkedin"></i>
            </a>

            <a target="blank" rel= "noopener noreferrer" href="https://github.com/ReemMDA99">
                <i class="fa fa-github" />
            </a>
        

            <a target="blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/19446730/reem-mohammed-ahmed">
                <i class="fa fa-stack-overflow" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="src\assets\files\resume-gif.gif">
                <i class="fa fa-file-pdf"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:reem.mda0909@gmail.com">
                <i class="fas fa-envelope"></i>
            </a>
        </footer>

    );

}
export default Footer;