import { useState } from "react";
import Stopwatch from "./Stopwatch";

function Home() {
    const [nbrSets, setNbrSets] = useState(0);

    return (
        <div className="home">
            <div className='content'>
                <h1>Welcome Buddy</h1>
                <Stopwatch />
                <h2> Number of Sets : </h2>
                <div className="set" >
                    <button id="minus" onClick={()=>setNbrSets(nbrSets-1)}>-</button>
                    <h1>{nbrSets}</h1>
                    <button id="plus" onClick={()=>setNbrSets(nbrSets+1)}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
