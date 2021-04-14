import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Scroll from "./Components/Scroll/Scroll";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Work from "./Components/Pages/Work/Work";
import Skills from "./Components/Pages/Skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="backgroundImage">
        <Scroll />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
