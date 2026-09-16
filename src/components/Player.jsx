import { useState ,useRef } from "react";

export default function Player() {
  const [enterplayer, setenteredplayer] = useState('');
   const [countervalue , setcountervalue] = useState('');
  const playername = useRef();
  function changeHandler(){
    // refernce data save in the usestate on click button from ref
    setenteredplayer(playername.current.value);
  }

  const counter = useRef();
  function counterhandler(){
    // counter.current.value
    setcountervalue(counter.current.value++)
    counter.current.value ='';
      //setcountervalue(counter.target.value++) // for event trigger 
  }

  return (
    <section id="player">
      <h2>Welcome {enterplayer ?? "unknown value"}</h2><br/>
      <h3>{countervalue}</h3>
      <p>
        <input ref={playername} type="text" /><br/>
        <input ref={counter} type="number"/>
        <button onClick={changeHandler}>Set Name</button>
        <button onClick={counterhandler}>increse counter</button>
      </p>
    </section>
  );
}
