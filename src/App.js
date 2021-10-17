import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import MyRouter from './components/MyRouter';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <MyRouter />
      </div>
    </Router>
  );
}

export default App;
