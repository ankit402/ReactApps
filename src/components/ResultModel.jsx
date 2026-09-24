import { forwardRef,useImperativeHandle,useRef } from "react";

const ResultModel = forwardRef(function ResultModel({result , targetTime }, ref)
{
     const myrefdialog = useRef();
     useImperativeHandle(ref, () => ({
     open() {
     myrefdialog.current.showModal();
     }
     }));
return  
     (<dialog ref={myrefdialog} className="result-modal">
     <h2>You lost {result} </h2>
     <p>The target time was <strong>{targetTime} seconds.</strong></p>
     <p>You stopped timer with <strong>X Seconds left.</strong></p>
     <form method="dialog"> <button>Close</button></form>
     </dialog>);
});
export default ResultModel;