// import all components
import React, { useState } from 'react';
import About from './components/About';

// import logo from './logo.svg';
// import './App.css';

function App() {
  const [thisCategory, setThisCategory] = useState("about")
  return (
    <div>
      <div className="mobile-header">
        <Header thisCategory= {thisCategory} setThisCatergory={setThisCategory}></Header>
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
