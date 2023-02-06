import myLogo from "../workout.svg"
const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="App-logo" src={myLogo} alt="SVG logo image" ></img>
            <h1>I-Workout</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Workout</a>
            </div>
        </nav>
    );
}

export default Navbar;