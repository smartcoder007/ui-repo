//Multiple component in sync
import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/12counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncreament = (counter) => {
    console.info("Called  Handle Increament..." + counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.info("counter value " + this.state.counters[index]);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.info("Called delete Handler..." + counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({counters:counters});
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncreament={this.handleIncreament}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
