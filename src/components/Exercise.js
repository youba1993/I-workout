const Exercise = (props) => {
    const {name, type, muscle, equipment, difficulty, instructions} = props;
    console.log(name, type, muscle, equipment, difficulty, instructions)
    return (
        <div className="exercise">
            {name}
        </div>
    );
}

export default Exercise;