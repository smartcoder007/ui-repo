import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./setup/Home";
import About from "./setup/About";
import Error from "./setup/Error";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/01counter";
import CondRendering from "./components/02conditionRendering";
import HandleEvents from "./components/03handlingEvents";
import PassArg from "./components/04passArgsEvents";
import PassData from "./components/05passDataComponent";
import PassChildren from "./components/06passChildrenCom";
import PassChildren7 from "./components/07passChildrenCom";
import RaisingHandEvent from "./components/08raisingHandlingEvents";
import UpdatingState from "./components/09updatingState";
import SingleSourceofTruth from "./components/10singleSourceofTruth";
import UpliftingState from "./13upliftingTheState";
import MyApp from "./03functionalcom";
import InLineStyle from "./04InlineStyle";
import ContactCards from "./06ContactCards";
import NavBar from "./components/navbar";
import ApiCall from "./08ApiCall";
import Form01 from "./09Form01";

/*
ReactDOM.render(
  <React.StrictMode>
    <div>
      <NavBar />
      <main className="container">
        <Form01 />
      </main>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
*/

ReactDOM.render(
  <React.StrictMode>
    <div>
      <NavBar />
      <main className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
//export default ReactRouterSetup;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
