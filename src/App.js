import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Preloader from './Components/Preloader';
import NavBar from './Components/NavBar';
import Scroll from './Components/Scroll';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [load, setLoadState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadState(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <Scroll />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
