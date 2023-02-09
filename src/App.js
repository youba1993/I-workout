import './App.css';
import Stopwatch from './components/Stopwatch';
import Workout from './components/Workout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </div>
  );
}

export default App;
