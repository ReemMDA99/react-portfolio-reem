import React, { useEffect, useState } from "react";
// import all components

import About from './components/About';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
// import logo from './logo.svg';
// import style page
import './App.css';

function App() {
  useEffect(() => {
		document.title = "Reem Ahmed's Portfolio";
	}, []);

  const [categories] = useState([
    { name: "About", description:"bcvxb"},
    // {name: "Navigation", description:"saretgf"},
    { name: "Contact", description:"cxvxcvcxv"},
    { name: "Resume", description:"xcvxcvxcvxcv"},
  ]);
  const [thisCategory, setThisCategory] = useState("About");
  
  return (
      <div className="App">
        <header
          categories={categories}
          thisCategory= {thisCategory} 
          setThisCategory={setThisCategory}>
        </header>
        {thisCategory === "About" && <About />}
        {/* {thisCategory ==="Navigation" && <Navigation/>} */}
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
