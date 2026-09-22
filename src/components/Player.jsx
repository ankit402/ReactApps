import { useState, useRef } from "react";


export default function Player() {
  const [enteredPlayerName , SetenteredPlayerName] = useState('');
  //const [submitted, SetSubmitted] = useState(false);
  const playerName = useRef();

  // function handleChange(event){
  //   console.log('handle change click')
  //      SetenteredPlayerName(event.target.value);
  // }

  function handleClick(){
    //console.log('handle  click')
    SetenteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/> 
        {/* onChange={handleChange} value={enteredPlayerName} /> */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
