import { useState } from "react"

export default function TimeChallenge({title, targettime})
{
    const [StartedTime, setTimeStarted] = useState(false);
    const [TimeExpired, setTimeExpired] = useState(false); 

    let timer ;
    //handler
        function handlerStart(){
            timer = setTimeout(() => {
                setTimeExpired(true);
            }, targettime * 1000)

            setTimeStarted(true);
        }

        function handleStop(){
            clearTimeout(timer);
        }

    return (  

    <section className="challenge">
        <h2>{title}</h2>
        {TimeExpired && <p>'You lost'</p>}
        <p className="challenge-time">
            {targettime} seconds {targettime > 1 ? 's' : ''}
        </p>
        <button onClick={StartedTime ? handleStop : handlerStart}>  Challenge</button>
        <p className={StartedTime ? 'active': undefined}>
            {StartedTime ? 'time is running ...'  : 'time inactive'}</p>
        </section>   
    );  
}