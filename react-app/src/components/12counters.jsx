// Single source of Truth
import React, { Component } from "react";
import Counter from "./counter5";

class Counters extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-warning mt-5">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          // passing id and access in children component
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncreament={this.props.onIncreament}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
