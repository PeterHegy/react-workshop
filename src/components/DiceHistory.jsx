import React from 'react';

function DiceHistory({allRolls, onSelectRoll}) {
    function handleSelect () {
        onSelectRoll(58);
    }

    return (
        <ul>
            {
                allRolls.length === 0 ? (
                    <p>List is empty</p>
                ) : (
                    allRolls.map((singleRoll, i) => (<li key={i}>{singleRoll}<button onClick={handleSelect}>select</button></li>))
            )
            }
        </ul >
    )
}

export default DiceHistory;
