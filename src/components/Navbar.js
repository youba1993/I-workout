import myLogo from "../workout.svg"
const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="App-logo" src={myLogo} alt="SVG logo" ></img>
            <h1>I-Workout</h1>
            <div className="links">
                <a href="/stopwatch">Stopwatch</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Workout</a>
            </div>
        </nav>
    );
}

export default Navbar;