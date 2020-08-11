import React from "react";
import "./style.css";

function PodcastCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>

            <span onClick={() => props.MovePodcast(props.id)} className="move">
                {/* 𝘅 */}
            </span>
        </div>
    );
}

export default PodcastCard;
