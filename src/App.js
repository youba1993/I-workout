import './App.css';
import Stopwatch from './components/Stopwatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <div className='content'>
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
