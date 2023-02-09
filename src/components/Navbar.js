import { Link } from "react-router-dom";
import myLogo from "../workout.svg"
const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="App-logo" src={myLogo} alt="SVG logo" ></img>
            <Link to="/"><h1>I-Workout</h1></Link>
            <div className="links">
                <ul>
                    <li><Link to="stopwatch">Stopwatch</Link></li>
                    <li><Link to="workout" style={{
                        color: "white",
                        backgroundColor: '#f1356d',
                        borderRadius: '8px'
                    }}>Search Workout </Link></li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;