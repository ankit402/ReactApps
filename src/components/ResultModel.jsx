import { forwardRef,useImperativeHandle,useRef } from "react";
import { createPortal } from "react-dom";

const ResultModel = forwardRef(function ResultModel({ targetTime, remainingTime , onReset}, ref)
{
     const myrefdialog = useRef();

     const userLost = remainingTime <= 0;
     const remainingTimeFormattedtime = (remainingTime / 1000).toFixed(2) ;
    // const Score =Math.round(1- remainingTime / targetTime ) * 100 ;
     // Calculate score
       // Target time is in seconds, remainingTime is in milliseconds
  const targetTimeMs = targetTime * 1000;

  // Calculate score
  const Score = Math.round(
    (1 - remainingTime / (targetTime * 1000)) * 100
  );
     useImperativeHandle(ref, () => {
    return {
      open() {
        myrefdialog.current.showModal();
      },
    };
  });
    
return  createPortal(
     <dialog ref={myrefdialog} className="result-modal">
     {userLost && <h2> You lost  </h2>}
     {!userLost && <h2>Your Score : {Score}</h2>}
     <p>
        The target time was <strong>{targetTime} seconds. </strong>
        </p>
     <p>
        You stopped timer with <strong>{remainingTimeFormattedtime} Seconds left.</strong>
     </p>
     <form method="dialog" onSubmit={onReset}> 
        <button>Close</button></form>
     </dialog>, document.getElementById('modal')
     );
});

export default ResultModel;