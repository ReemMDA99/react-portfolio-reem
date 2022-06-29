import React from 'react';

function About() {
  return (
    <section>
      <div className="about" id ="about">
        <h1 className="header">Welcome to my Portfolio</h1>
      </div>
      <div className="photo-center">
				<img
					src={require('../../assets/images/Reem.jpg')}
					alt="Reem Ahmed"
					className="photo"
				/>
			</div>
      <div>
        <strong>
        <p>
          Junior Web Developer specializing in front end development. 
          Experienced with all stages of the development cycle for dynamic web projects. 
          Well-versed in numerous programming languages including HTML5, PHP OOP, JavaScript, CSS, MySQL.
          Strong background in project management and customer relations.
        </p>
        <br></br>
          <p>I do the work I do because I love it. I like the industry. I like the people I meet. I like to talk shop. 
            I embrace the nerd. I like to make the web a better place. Hopefully we cross paths in the real world someday and we can make it a better place together.
          </p>
        </strong>
      </div>
    </section>
  
  );
}

export default About;