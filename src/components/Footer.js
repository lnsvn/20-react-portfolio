import React from "react";

export default function Footer() {
    return (
        <div className="sticky-bottom">
            <footer className="yellow py-2">
                <ul className="d-flex justify-content-evenly">
                    <li className="list-group-item"><a className="btn btn-outline-light hover" href="https://github.com/lnsvn"><i className="fa-brands fa-github"></i></a></li>
                    <li className="list-group-item"><a className="btn btn-outline-light" href="https://www.linkedin.com/in/lauren-sullivan-5644b872/"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li className="list-group-item"><a className="btn btn-outline-light" href="https://twitter.com/lnsvn_dev"><i className="fa-brands fa-square-twitter"></i></a></li>
                </ul>
            </footer>
        </div>
    );
}