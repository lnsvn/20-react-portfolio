import React from "react"; 

export default function Skill (props) {
    return (
        <div className="card px-2 pt-2 border border-warning">
            <h3>{props.skill}</h3>
        </div>
    )
}