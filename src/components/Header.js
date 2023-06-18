import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Navigation from "./Navigation";

export default function Header() {
  // sets initial state of currentPage to About Me page
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // checking to see what the value of `currentPage` is, then returning corresponding component to render
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  // function to update current page state
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calling renderPage which will return a component */}
      {renderPage()}
    </div>
  );
}
  