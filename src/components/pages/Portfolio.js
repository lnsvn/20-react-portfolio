import React from "react";
import Project from "../Project";

export default function Portfolio() {
  const projects = [
    {
      title: "CastleJournal",
      img: "",
      appLink: "",
      repoLink: "",
    },
    {
      title: "PokéWiki",
      img: "",
      appLink: "",
      repoLink: "",
    },
  ]
  const projectData = projects.map((project) => {
    return (
      <div>
        <ul>
          <li><Project title={project.title}/></li>
        </ul>
      </div>
    )
  })
  return (
    <main>
      <div>{projectData}</div>
    </main>
  )
}

