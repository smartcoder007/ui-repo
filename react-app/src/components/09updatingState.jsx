// passing chilren component
import React, { Component } from "react";
import Counter from "./counter4";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
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
        {this.state.counters.map((counter) => (
          // passing id and access in children component
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
