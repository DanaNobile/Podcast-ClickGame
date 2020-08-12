import React from "react";
import "./style.css";
// import Arrow from 'react-icons/lib/fa/caret-right';

//stateless component
const Score = props => (
    <div className="gameScore">
        <p>Your goal is to try and click all of the podcasts, without clicking the same one twice.
            <br>
            </br>
            <br></br>
            Look out though! The images start to move on you, so flex your memory muscle!</p>
        <h3 className="score">Your Score = {props.total}</h3>
        <h3 className="status">{props.status}</h3>
    </div>
);

export default Score;
