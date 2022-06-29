// import all components
import React, { useEffect, useState } from "react";
import About from './components/About';

// import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
		document.title = "Reem Ahmed's Portfolio";
	}, []);

  const [categories] = useState([
    { name: "About", description:"bcvxb"},
    { name: "Project", description:"cvcxvc"},
    { name: "Contact", description:"cxvxcvcxv"},
    { name: "Resume", description:"xcvxcvxcvxcv"},
  ]);
  const [thisCategory, setThisCategory] = useState("About");
  
  return (
      <div className="app-header">
        <header
          categories={categories}
          thisCategory= {thisCategory} 
          setThisCategory={setThisCategory}>

        </header>
        {thisCategory === "About" && <About />}
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
