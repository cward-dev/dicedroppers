import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import MyRouter from './components/MyRouter';

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
