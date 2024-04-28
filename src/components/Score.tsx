import React from "react";

export interface ScoreProps {
    currentScore: number,
    totalScore: number,
    onReset: () => void;
};

const Score: React.FC<ScoreProps> = ({ currentScore, totalScore, onReset }) => {
    return (
        <>
        <h2>
            Score: {currentScore}/{totalScore}
        </h2>        
        <button onClick = {() => onReset()}>play again</button>
        </>
    )
};

export default Score;