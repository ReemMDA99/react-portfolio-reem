import React from "react";
import Navigation from "../Navigation";


function Header(props) {
    /*props {
        thisCategory: {thisCategory},
        setThisCategory: {setThisCategory}
    }
    */
    const { thisCategory, setThisCategory } = props;
    // props.thisCategory (Not preferred but you can do it)
    return(
        <header>
            <h2>Reem's Portfolio</h2>
            <div>
                <Navigation thisCategory={thisCategory} setThisCategory={setThisCategory}></Navigation>
            </div>
        </header>
    );
}

export default Header;