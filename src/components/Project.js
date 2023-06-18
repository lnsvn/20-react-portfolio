import React from "react";

export default function Project(props) {
    return (
        <div className="card d-flex flex-row align-items-center border border-warning p-4">
            <img src={props.img} width="350" height="225" className="rounded border border-dark" alt={props.title}></img>
            <div className="card-body d-flex flex-column justify-content-center align-items-start m-3">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.description}</p>
                <div className="d-flex flex-row align-items-center">
                    <a className="btn btn-lg btn-outline-dark me-5" href={props.app}>Deployed App</a>
                    <a className="btn btn-outline-dark" href={props.repo}><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    );
};