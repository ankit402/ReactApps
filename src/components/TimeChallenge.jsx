import {
  useState,
  useRef,
  useEffect
} from "react";

import ResultModel from "./ResultModel";

export default function TimeChallenge({ title, targettime }) {
  const [timeRemaining, setTimeRemaining] = useState(
    targettime * 1000
  );

  const [isActive, setIsActive] = useState(false);
  const timer = useRef();
  const myrefdialog = useRef();

  function handleStart() {
    setIsActive(true);

    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => {
        return prevTimeRemaining - 10;
      });
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    setIsActive(false);
  }

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer.current);
      setIsActive(false);
    console.log('open checking');
      myrefdialog.current.open();
    }
  }, [timeRemaining]);

  return (
    <>
      <ResultModel
        ref={myrefdialog}
        targetTime={targettime}
        result="lost"
      />

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