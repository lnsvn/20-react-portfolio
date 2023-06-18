import React from "react";

// destructures variable from props
function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className="yellow d-flex justify-content-between align-items-center p-5 sticky-top">
            <header className="font-link">
                <h1 className="ms-5">Lauren Sullivan</h1>
            </header>
            <h1>✵</h1>
            <h1>❊</h1>
            <h1>✺</h1>
            <h1>❊</h1>
            <h1>✵</h1>
            <ul className="nav justify-content-end me-5">
                <li className="nav-item font-link">
                    <a href="#aboutme"
                    onClick={() => handlePageChange('AboutMe')}
                    // checks to see if the current page is "About Me", if yes nav-link is black, if no, the nav-link is white
                    className={currentPage === 'AboutMe' ? 'nav-link link-body-emphasis' : 'nav-link link-light'}>
                        <h2>About Me</h2>
                    </a>
                </li>
                <li className="nav-item font-link">
                    <a href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link link-body-emphasis' : 'nav-link link-light'}>
                        <h2>Portfolio</h2>
                    </a>
                </li>
                <li className="nav-item font-link">
                    <a href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link link-body-emphasis' : 'nav-link link-light'}>
                        <h2>Contact</h2>
                    </a>
                </li>
                <li className="nav-item font-link">
                    <a href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link link-body-emphasis' : 'nav-link link-light'}>
                        <h2>Resume</h2>
                    </a>
                </li>
            </ul>
        </div>
    );
};
  
export default Navigation;
  