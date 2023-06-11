import React from "react";

export default function Footer() {
    return (
        <div>
            <footer class="bg-primary p-2">
                <ul class="d-flex justify-content-evenly">
                    <li class="list-group-item"><a class="btn btn-lg btn-outline-light" href="https://github.com/lnsvn"><i class="fa-brands fa-github"></i></a></li>
                    <li class="list-group-item"><a class="btn btn-lg btn-outline-light" href="https://www.linkedin.com/in/lauren-sullivan-5644b872/"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li class="list-group-item"><a class="btn btn-lg btn-outline-light" href=""><i class="fa-brands fa-square-twitter"></i></a></li>
                </ul>
            </footer>
        </div>
    );
}