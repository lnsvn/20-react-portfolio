import React from "react";
import portrait from "../../images/aboutme.jpg"

export default function AboutMe() {
  return (
    <main className="fill-page purple font-link">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h1 className="p-5">About Me</h1>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <img alt="Self portrait" src={portrait} width="200" height="200" className="rounded border border-warning m-5"></img>
          <div>
            <p>
              Hello! 
            </p>
            <br></br>
            <p>
              My name is Lauren Sullivan and I am an aspiring Full-Stack Web Developer. I graduate from the UCONN Coding Bootcamp in July 2023. Take a look at my top projects displayed in the portfolio page. You will find links to the deployed applications and the corresponding GitHub repositories. Feel free to contact me with any questions or comments. You can also check out my GitHub, Indeed, or Twitter below.
            </p>
            <br></br>
            <p>
              Outside of web development, my interests include photography, design, and reading. 
            </p>
            </div>
        </div>
      </div>
    </main>
  );
}
