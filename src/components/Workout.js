import { useState } from "react";
import axios from 'axios';
import Exercise from "./Exercise";

const Workout = () => {
    const [exercisesResult, setExercisesResult] = useState(null)
    const [muscleOption, setMuscleOption] = useState('abdominals');

    const musclesList = ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes",
        "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"]

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios({
                url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscleOption,
                method: 'GET',
                headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY },
            })
             setExercisesResult(resp.data)
            console.log(exercisesResult)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="workout">
            <h1>workout</h1>
            <form className="form" onSubmit={(e) => { handleSubmit(e) }}>
                <label>Choose targeted muscle: </label>
                <select id="muscle" name="muscle" onChange={(e) => { setMuscleOption(e.target.value) }}>
                    {musclesList.map((muscle, index) =>
                        <option key={index} value={muscle} >{muscle}</option>
                    )}
                </select>
                <button type="submit">Search</button>
            </form>
                { exercisesResult && exercisesResult.map((exercice, index) =>
                    <Exercise key={index} exercice={exercice} />
                )}
        </div>
    );
}

export default Workout;