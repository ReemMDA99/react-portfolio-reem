// import React library
import React, { useEffect, useState } from "react";
// import style page
import './App.css'
// import all components
import About from './components/About';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
// import logo from './logo.svg';


function App() {
  useEffect(() => {

		document.title = "Reem Ahmed's Portfolio";
	}, []);

  const [categories] = useState([
    { name: "About", description:"bcvxb"},
    { name: "Projects", description:"bcvxb"},
    { name: "Contact", description:"cxvxcvcxv"},
    { name: "Resume", description:"xcvxcvxcvxcv"},
  ]);
  const [thisCategory, setThisCategory] = useState("About");
  
  return (
    <div className="App">
      <Navigation
        categories={categories}
        thisCategory= {thisCategory} 
        setThisCategory={setThisCategory}>
      </Navigation>
      
      {thisCategory === "About" && <About/>}

    </div>
     
      /* <div>
				<main>{renderCategory()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div> */
  );
};

export default App;
