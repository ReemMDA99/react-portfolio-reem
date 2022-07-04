import React, { useState } from "react";
import './contact-style.css';
//import validation function from helpers.js
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
        }
    };
    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`A ${capitalizeFirstLetter(e.target.name)} Is Required.`);
          } else {
            setErrorMessage('');
          }
        }
    };
      
    // console.log(formState);
    
    return (
        <section className="d-flex align-items-center flex-column">
            <h2>Contact Me</h2>
            <form id="contact-form" className="login-form d-flex flex-column border border-dark m-3 p-3" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> Name: </label><br></br>
                    <input type ="text" defaultValue={name} onBlur={handleChange} name="name" className="float-right"/>
                </div>
                <div> 
                    <label htmlFor = "email"> Email address: </label><br></br>
                    <input type="email" defaultValue={email} onBlur={handleChange} name = "email" className="float-right"  />
                </div>
                <div>
                    <label htmlFor="message">Message:</label><br></br>
                    <textarea name="message" defaultValue={message}  onBlur={handleChange} rows="5" className="float-right w-100"/>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                                </div>
                        )}
                </div>
                <button data-testid="button" type="submit">Submit</button>
                <form id="contact-form" onSubmit={handleSubmit}></form>
            </form>
            <div id="contact-me">
				<ul>
					<div className="my-contact">
						<p>Contact Number: (647) 505-0906 
            <i class="fa fa-phone"></i>
            </p>
						<p>Email: reem.mda0909@gmail.com 
            <i class="fa fa-envelope" aria-hidden="true"></i>
            </p>
						<p>
							GitHub:{" "}
							<a href="https://github.com/ReemMDA99">
                <i className="fab fa-github"></i>
              </a>
						</p>
					</div>
				</ul>
			</div>
        </section>

    ); 
}

export default ContactForm;