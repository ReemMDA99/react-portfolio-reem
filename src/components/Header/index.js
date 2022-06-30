import React from "react";
import Navigation from "../Navigation";

function Header(props) {
    const { thisCategory, setThisCategory } = props;
    return(
        <header>
            <h2>Reem's Portfolio</h2>
            <div>
                <Navigation
                    thisCategory={thisCategory} 
                    setThisCategory={setThisCategory}>

                </Navigation>
            </div>
        </header>
    )
}

export default Header;