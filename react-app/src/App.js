//Multiple component in sync
import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import SingleSourceofTruth from "./components/10singleSourceofTruth";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <main className="container">
        <SingleSourceofTruth />
      </main>
    </React.Fragment>
  );
}

export default App;
