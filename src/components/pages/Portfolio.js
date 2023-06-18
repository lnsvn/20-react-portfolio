import React from "react";
import Project from "../Project";
import CastleJournalImg from "../../images/castlejournal.png";
import PokéWikiImg from "../../images/pokewiki.png";
import TechBlogImg from "../../images/techblog.png";
import NoteTaker from "../../images/notetaker.png";
import WorkDayScheduler from "../../images/workdayscheduler.png";

export default function Portfolio() {
  // array of projects
  const projects = [
    {
      title: "Project-3",
      text: "This is a plcaeholder card for Project 3",
      appLink: "",
      repoLink: "",
    },
    {
      title: "CastleJournal",
      img: CastleJournalImg,
      text: "Castle Journal is an English companion app for the 100 Famous Japanese Castles guide book. You can use Castle Journal for planning your trips, sharing your experiences, and updating an online version of your stamp book with the stamps you've collected.",
      appLink: "https://rocky-fortress-11303.herokuapp.com/login",
      repoLink: "https://github.com/lnsvn/CastleJournal",
    },
    {
      title: "PokéWiki",
      img: PokéWikiImg,
      text: "PokéWiki is a Pokémon search engine designed to have a similar look and feel to the Pokémon TV show and games. Search for any Pokémon in the Pokédex by typing its name or number into the search. Then, you will be presented with the presented with the Pokémon's name, sprite, number, types, a short description, and a link to a Wikipedia page if you would like to learn more.",
      appLink: "https://tcunningham203.github.io/Etsy-Pokedex/",
      repoLink: "https://github.com/lnsvn/PokeWiki",
    },
    {
      title: "The Tech Blog",
      img: TechBlogImg,
      text: "The Tech Blog is a CMS-style blog site, where developers can publish blog posts and comment on other developers’ posts.",
      appLink: "https://limitless-bastion-04221.herokuapp.com/",
      repoLink: "https://github.com/lnsvn/14-tech-blog",
    },
    {
      title: "Note Taker",
      img: NoteTaker,
      text: "Note Taker is a an application you can use to write, save, and delete notes so that your thoughts and tasks will be organized.",
      appLink: "https://enigmatic-springs-22882.herokuapp.com/",
      repoLink: "https://github.com/lnsvn/11-note-taker"
    },
    {
      title: "Work Day Scheduler",
      img: WorkDayScheduler,
      text: "Work Day Scheduler is a simple planner application that allows users to save events for each hour of the work day (9AM-5PM). Employees with busy schedules can add important events to their planner so that they can manage their time effectively. The time blocks are color coded to represent past, present, or future hours.",
      appLink: "https://lnsvn.github.io/05-third-party-apis/",
      repoLink: "https://github.com/lnsvn/05-third-party-apis",
    }
  ]
  // maps projects array for props data
  const projectData = projects.map((project) => {
    return (
      <div>
        <ul>
          <li className="list-group-item mb-4"><Project title={project.title} img={project.img} description={project.text} app={project.appLink} repo={project.repoLink}/></li>
        </ul>
      </div>
    )
  })
  return (
    <main className="purple">
      <div className="container font-link d-flex flex-column align-items-center">
        <h1 className="p-5">Portfolio</h1>
        {/* inserts function including project data and Project component including props */}
        <div>{projectData}</div>
      </div>
    </main>
  )
}

