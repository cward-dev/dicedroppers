import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MyRouter from './components/MyRouter';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
