// Single source of Truth
import React, { Component } from "react";
import Counter from "./counter5";

class Counters extends Component {
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
    console.log(this.props);
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-warning m-2">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          // passing id and access in children component
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncreament={this.handleIncreament}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
