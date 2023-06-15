import React from "react";

export default function Project(props) {
    return (
        <div class="card" styles="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};