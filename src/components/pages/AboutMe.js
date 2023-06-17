import React from "react";
import portrait from "../../images/aboutme.jpg"

export default function AboutMe() {
  return (
    <main>
      <div className="purple font-link d-flex flex-column align-items-center justify-content-center">
        <h1 className="p-5">About Me</h1>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <img alt="Self portrait" src={portrait} width="200" height="200" className="rounded"></img>
          <p>
            This page is about me.
          </p>
        </div>
      </div>
    </main>
  );
}
