import { useState } from "react";

const Workout = () => {

    const [muscleOption, setMuscleOption] = useState('abdominals');
    const musclesList = ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes",
        "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"]
    console.log(process.env)
    function handleSubmit(e) {
        e.preventDefault();
           fetch("https://api.api-ninjas.com/v1/exercises?muscle="+muscleOption, {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'X-Api-Key': process.env.API_KEY,
                    "Content-Type": "Application/json",   
                }
            }).then(response => {
                if (response.ok){
                    console.log(response.json())
                }
                throw response
            })

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
        </div>
    );
}

export default Workout;