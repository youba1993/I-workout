const Exercise = (exercice) => {
    const {exercice: {name, type, muscle, equipment, difficulty, instructions}} = exercice;
    console.log(name, type, muscle, equipment, difficulty, instructions)
    return (
        <div className="exercise">
            <h4>Exercise name: {name}</h4>
            <p><strong>Exercise type: </strong>{type}</p>
            <p><strong>Muscle: </strong>{muscle}</p>
            <p><strong>Equipment: </strong>{equipment}</p>
            <p><strong>Difficulty: </strong>{difficulty}</p>
            <p><strong>Instructions: </strong>{instructions}</p>
         
        </div>
    );
}

export default Exercise;