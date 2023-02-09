import { useState } from "react";

const Workout = () => {
    const [muscleOption, setMuscleOption]= useState('');
    const musclesList = ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes",
        "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"]
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(muscleOption)
    }
    return (
        <div className="workout">
            <h1>workout</h1>
            <form className="form" onSubmit={(e) => { handleSubmit(e) }}>
                <label>Choose targeted muscle: </label>
                <select id="muscle" name="muscle" onChange={(e)=>{setMuscleOption(e.target.value)}}>
                    {musclesList.map((muscle, index)=>
                       <option key={index} value={muscle} >{muscle}</option>
                    )}
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Workout;