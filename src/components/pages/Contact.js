import React from "react";

export default function Contact() {
    return (
      <main className="purple font-link">
        <div className="container d-flex flex-column justify-content-center">
          <h1 className="p-5 d-flex flex-row justify-content-center">Contact</h1>
          <form className="mx-5 mb-5">
            <div className="mb-3">
              <label for="inputName" className="form-label">Name:</label>
              <input type="text" className="form-control border border-warning" id="inputName" aria-describedby="nameHelp"></input>
            </div>
            <div className="mb-3">
              <label for="inputEmail" className="form-label">Email address:</label>
              <input type="email" className="form-control border border-warning" id="inputEmail" aria-describedby="emailHelp"></input>
            </div>
            <div className="mb-3">
              <label for="inputText" className="form-label">Message:</label>
              <textarea rows="6" type="text" className="form-control border border-warning" id="inputText"></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-outline-warning">Submit</button>
          </form>
        </div>
      </main>
    );
  }