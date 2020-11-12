// passing chilren component
import React, { Component } from "react";
import Counter from "./counter2";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.counters.map((counter) => (
          // passing id and access in children component
          <Counter key={counter.id} value={counter.value} id={counter.id}>
            
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
