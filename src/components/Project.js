import React from "react";

export default function Project(props) {
    return (
        <div class="card d-flex flex-row">
            <img src={props.img} width="350" height="225" className="rounded"></img>
            <div class="card-body">
                <h3 class="card-title">{props.title}</h3>
                <p class="card-text">{props.description}</p>
                <a class="btn btn-lg btn-outline-primary me-5" href={props.app}>Deployed App</a>
                <a class="btn btn-lg btn-outline-primary" href={props.repo}><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    );
};