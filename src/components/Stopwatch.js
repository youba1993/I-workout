const Stopwatch = () => {
    const handleStart = () =>{
        console.log('watch Started')
    }
    const handleStop = () =>{
        console.log('watch Stoped')
    }
    const handleReset = () =>{
        console.log('watch reset')
    }


    return ( 
        <div className="stopwatch">
        <h2>Stopwatch</h2>
        <button id="start" onClick={()=>{handleStart()}}>Start</button>
        <button id="stop" onClick={()=>{handleStop()}}>Stop</button>
        <button id="reset" onClick={()=>{handleReset()}}>Reset</button>
        </div>
     );
}
 
export default Stopwatch;