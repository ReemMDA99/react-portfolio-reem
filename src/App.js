// import React library
import React, { useEffect, useState } from "react";

// import style page
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// react-router-hash-link

// import all components
import About from './components/About';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Projects from "./components/Projects"
// Create App function for main page
function App() {
  // Add useEffect to Hook the react title component
  useEffect(() => {
		document.title = "Reem Ahmed's Portfolio";
	}, []);
	
	const [thisCategory, setThisCategory] = useState("about");

	// create a function to check the category selected and then render selected category
	const renderCategory = () => {
		switch (thisCategory) {
			case "about":
				return <About />;
			case "projects":
				return <Projects />;
			case "resume":
				return <Resume />;
			case "contact":
				return <Contact />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="App">
				<Header thisCategory={thisCategory} setThisCategory={setThisCategory}></Header>
			</div>
     		<div>
        		<main>{renderCategory()}</main>
      		</div>
			<div>
				<Footer></Footer>
			</div>
  
    	</div>
  );
	
}

export default App;
