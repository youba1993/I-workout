import { useEffect, useState } from "react";

 

const Stopwatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    function Timer(props) {
        return (
          <div className="timer">
            <span className="digits">
              {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
              {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
              {("0" + ((props.time / 10) % 100)).slice(-2)}
            </span>
          </div>
        );
      }

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    }
    const handlePause = () => {
        setIsPaused(!isPaused);
    }
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    }


    return (
        <div className="stopwatch">
            <Timer time={time}/>
            <button id="start" onClick={() => { handleStart() }}>Start</button>
            <button id="stop" onClick={() => { handlePause() }}>Pause</button>
            <button id="reset" onClick={() => { handleReset() }}>Reset</button>
        </div>
    );
}

export default Stopwatch;