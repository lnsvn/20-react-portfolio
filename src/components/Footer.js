import React from "react";

export default function Footer() {
    return (
        <div className="sticky-bottom">
            <footer className="yellow p-2">
                <ul class="d-flex justify-content-evenly">
                    <li class="list-group-item"><a class="btn btn-lg btn-outline-light hover" href="https://github.com/lnsvn"><i class="fa-brands fa-github"></i></a></li>
                    <li class="list-group-item"><a class="btn btn-lg btn-outline-light" href="https://www.linkedin.com/in/lauren-sullivan-5644b872/"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li class="list-group-item"><a class="btn btn-lg btn-outline-light" href="https://twitter.com/lnsvn_dev"><i class="fa-brands fa-square-twitter"></i></a></li>
                </ul>
            </footer>
        </div>
    );
}