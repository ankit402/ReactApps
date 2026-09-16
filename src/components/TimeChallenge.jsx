import { useState } from "react"

export default function TimeChallenge({title, targettime})
{
    const [StartedTime, setTimeStarted] = useState(false);
    const [TimeExpired, setTimeExpired] = useState(false); 

    //handler
        function handlerStart(){
            setTimeout(() => {
                setTimeExpired(true);
            }, targettime * 1000)

            setTimeStarted(true);
        }

    return (  

    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targettime} seconds {targettime > 1 ? 's' : ''}
        </p>
        <button onClick={handlerStart}>{StartedTime ? 'stop' : 'start'}  Challenge</button>
        <p className={StartedTime ? 'active': undefined}>
            {StartedTime ? 'time is running ...'  : 'time inactive'}</p>
        </section>   
    );  
}