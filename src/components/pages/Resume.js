import React from "react";
import Skill from "../Skill"
import LaurenSullivanResume from "../../resume/LaurenSullivanResume.pdf"

export default function Resume() {
  const frontEndSkills = ["HTML", "CSS", "JavaScript", "jQuery", "React", "Responsive Design", "BootStrap"];
  const backEndSkills = ["APIs", "Node", "Express", "MySQL/Sequelize", "MongoDB/Mongoose", "REST", "GraphQL"];

  const feSkillsData = frontEndSkills.map((skill) => {
    return (
      <div className="p-2">
        <Skill skill={skill}/>
      </div>
    )
  })
  const beSkillsData = backEndSkills.map((skill) => {
    return (
      <div className="p-2">
        <Skill skill={skill}/>
      </div>
    )
  })
    return (
      <main className="fill-page purple font-link d-flex flex-column">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h1 className="px-5 pt-5 pb-3">Resume</h1>
          <a class="btn btn-lg btn-outline-warning mb-3" role="button" href={LaurenSullivanResume} download="LaurenSullivanResume.pdf">
            Download
          </a>
          <div className="m-4 d-flex flex-column align-items-center">
            <h2 className="mb-4"><u>Front-End Proficiencies</u></h2>
            <div className="d-flex flex-row">
              {feSkillsData}
            </div>
          </div>
          <div className="m-4 d-flex flex-column align-items-center">
            <h2 className="mb-4"><u>Back-End Proficiencies</u></h2>
            <div className="d-flex flex-row mb-4">
              {beSkillsData}
            </div>
          </div>
        </div>
      </main>
    );
  }