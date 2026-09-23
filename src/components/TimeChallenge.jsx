import {
  useState,
  useRef,
  useImperativeHandle,
  useEffect
} from "react";

import ResultModel from "./ResultModel";

export default function TimeChallenge({ title, targettime, ref }) {
  const [timeRemaining, setTimeRemaining] = useState(
    targettime * 1000
  );

  const [isActive, setIsActive] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);     
        },10);
    }
   //return prevTimeRemaining - 10;
      

  function handleStop() {
    clearInterval(timer.current);
    //setIsActive(false);
  }

  if(timeRemaining <= 0) {
    
      clearInterval(timer.current);
     setTimeRemaining(targettime * 1000);
     dialog.current.open();
    
  };

  return (
    <>
      <ResultModel ref={dialog} targetTime={targettime} result="lost" />
        <section className="challenge">

          <h2>{title}</h2>

          {timeRemaining <= 0 && (
            <p>You lost</p>
          )}

          <p className="challenge-time">
            {targettime} second{targettime > 1 ? "s" : ""}
          </p>

          <button
            onClick={isActive ? handleStop : handleStart}
          >
            {isActive ? "Stop" : "Start"} Challenge
          </button>

          <p className={isActive ? "active" : undefined}>
            {isActive
              ? "Time is running..."
              : "Time inactive"}
          </p>

        </section>
      
    </>
  );
}