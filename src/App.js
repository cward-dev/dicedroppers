import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import MyRouter from './components/MyRouter';
import Home from './pages/home/home';
import Card from './components/Card/Card.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <MyRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
