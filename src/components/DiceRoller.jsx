import React from 'react';

function DiceRoller({ onRoll }) {
    function handleRoll () {
        onRoll(Math.floor(Math.random() * 21));
    }

    return (
        <button onClick={handleRoll}>Roll for initiative</button>
    )
}

export default DiceRoller;