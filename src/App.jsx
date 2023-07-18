// use nextId() to generate a new unique ID when needed
import nextId from "./generateId";
import Dice from './components/Dice.jsx'
import DiceRoller from "./components/DiceRoller.jsx";
import DiceHistory from './components/DiceHistory.jsx'
import { useState } from "react";

function App() {
  const [roll, setRoll] = useState(0);
  const [rolls, setRolls] = useState([]);

  function onRoll (number) {
    console.log(number);
    if (number === 0) {
      console.log('there isn\'t even a 0 on this dice how did you do that');
    }
    setRolls([...rolls, number]);
    setRoll(number);
  }

  function selectRoll (numbre) {
    console.log(numbre);
  };


  return (
    <>
      <p>You see a generic looking fantasy monster crawl out from around the corner</p>
      <Dice number={roll}/>
      <DiceRoller onRoll={onRoll}/>
      <DiceHistory allRolls={rolls} onSelectRoll={selectRoll}/>
    </>
  );
}

export default App;
