import MyForm from '../MyForm';
import React from 'react';

// import { validateEmail } from '../../utils/helpers';

function ContactForm() {
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
//     const [errorMessage, setErrorMessage] = useState('');
//     const { name, email, message } = formState;
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (!errorMessage) {
//         setFormState({ [e.target.name]: e.target.value });
//       }
//     };
  
//     const handleChange = (e) => {
//       if (e.target.name === 'email') {
//         const isValid = validateEmail(e.target.value);
//         if (!isValid) {
//           setErrorMessage('Your email is invalid.');
//         } else {
//           setErrorMessage('');
//         }
//       } else {
//         if (!e.target.value.length) {
//           setErrorMessage(`${e.target.name} is required.`);
//         } else {
//           setErrorMessage('');
//         }
//       }
//     };
    
    return (
        <section className="contact-container">
            <h1 className="contact-title">Contact</h1>
            <h5 className="contact-text">For all inquiries, feel free to contact me!</h5>

            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="name-form">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email" className="email-form">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message" className="message-form">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form> */}

            <MyForm />
        </section>
    )
}

export default ContactForm;


// added in Formspree.io 
// NEED TO add in back-end functionality for form in the future 
