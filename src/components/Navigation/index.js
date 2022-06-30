import React from "react";
import './nav-style.css';

function Navigation (props){
    const{
    categories,
    setThisCategory
    } = props;

    return(
        <nav className="m-3">
			<ul>
				{categories.map((category, id) => (
					<li key={id} onClick={() => {setThisCategory(category.name);}}>
					    {category.name}
					</li>
				))}
			</ul>
		</nav>
	);

}

export default Navigation;