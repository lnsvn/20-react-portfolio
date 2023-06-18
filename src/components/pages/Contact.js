import React, {useState} from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      setErrorMessage('Name is required.');
      return;
    } else if (email === '') {
      setErrorMessage('E-mail is required.');
      return;
    } else if (message === '') {
      setErrorMessage('Message is required.');
      return;
    };

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid.');
      return;
    };
    
    alert(`Thanks for contacting me ${name}. I will get back to you ASAP!`);

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <main className="fill-page purple font-link">
      <div className="container d-flex flex-column justify-content-center">
        <h1 className="p-5 d-flex flex-row justify-content-center">Contact</h1>
        <form className="mx-5 mb-5">
          <div className="mb-3">
            <label for="inputName" className="form-label">Name:</label>
            <input value={name} name='name' onChange={handleInputChange} type="text" className="form-control border border-warning" id="inputName" aria-describedby="nameHelp"></input>
          </div>
          <div className="mb-3">
            <label for="inputEmail" className="form-label">Email address:</label>
            <input value={email} name='email' onChange={handleInputChange} type="email" className="form-control border border-warning" id="inputEmail" aria-describedby="emailHelp"></input>
          </div>
          <div className="mb-3">
            <label for="inputText" className="form-label">Message:</label>
            <textarea value={message} name='message' onChange={handleInputChange} rows="6" type="text" className="form-control border border-warning" id="inputText"></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="text-warning">{errorMessage}</p>
            </div>
          )}
          <button type="submit" onClick={handleFormSubmit} className="btn btn-lg btn-outline-warning">Submit</button>
        </form>
      </div>
    </main>
  );
};