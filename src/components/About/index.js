import React from 'react';
import "./about-style.css";

function About() {
  return (
    <section className= "about">
      <div id ="about">
        <h1>Welcome to my Portfolio</h1>
      </div>
      <br></br>
      <div className="photo-center">
				<img
					src={require('../../assets/images/Reem.jpg')}
					alt="Reem Ahmed"
					className="rounded mx-auto d-block"
				/>
			</div>
      <div>
        
        <p>
          My name is Reem Ahmed, a Junior Web Developer specializing in full stack web development. 
          Experienced with all stages of the development cycle for dynamic web projects. 
          Well-versed in numerous programming languages including HTML5, PHP OOP, JavaScript, CSS, MySQL.
          Strong background in project management and customer relations.
        </p>
        <br></br>
        <p>
          I do the work I do because I love it. I like the industry. I like the people I meet. I like to talk shop. 
          I embrace the nerd. I like to make the web a better place. Hopefully we cross paths in the real world someday and we can make it a better place together.
        </p>
        <p>
          I recently earned
					a certificate in full stack development from the
					University of Toronto bootcamp, with newly developed
					skills in JavaScript, CSS, React.js, and responsive web
					design. I am known as an innovative problem solver
					passionate about developing apps, with a focus on
					mobile-first design and development.
        </p>
        
      </div>
    </section>
  
  );
}

export default About;