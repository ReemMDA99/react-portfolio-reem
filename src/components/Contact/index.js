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
        <section>
            <h1 data-testid="h1tag"> Contact me</h1>
            <form id="contact-form" className="login-form flex-column border border-dark m-3 p-3" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> Name: </label><br></br>
                    <input type ="text" defaultValue={name} onBlur={handleChange} name="name"/>
                </div>
                <div> 
                    <label htmlFor = "email"> Email address: </label><br></br>
                    <input type="email" defaultValue={email} onBlur={handleChange} name = "email"  />
                </div>
                <div>
                    <label htmlFor="message">Message:</label><br></br>
                    <textarea name="message" defaultValue={message}  onBlur={handleChange} rows="5"/>
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
						<p>Contact Number: (647) 505-0906</p>
						<p>Email: reem.mda0909@gmail.com</p>
						<p>
							GitHub:{" "}
							<a href="https://github.com/ReemMDA99">ReemMDA99</a>
						</p>
					</div>
				</ul>
			</div>
        </section>

    ); 
}

export default ContactForm;