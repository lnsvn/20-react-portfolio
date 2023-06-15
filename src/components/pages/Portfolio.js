import React from "react";
import Project from "../Project";
import CastleJournalImg from "../../images/castlejournal.png";
import PokéWikiImg from "../../images/pokewiki.png";
import TechBlogImg from "../../images/techblog.png"

export default function Portfolio() {
  const projects = [
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
    }
  ]
  const projectData = projects.map((project) => {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item mb-4"><Project title={project.title} img={project.img} description={project.text} app={project.appLink} repo={project.repoLink}/></li>
        </ul>
      </div>
    )
  })
  return (
    <main>
      <div className="container font-link d-flex flex-column align-items-center">
        <h1>Portfolio</h1>
        <div>{projectData}</div>
      </div>
    </main>
  )
}

