// Destructuring arguments
import React, { Component } from "react";
import Counter from "./counter5";

class Counters extends Component {
  /*
  render() {
    console.log(this.props);
    const { onReset, onDelete, onIncreament } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-warning mt-5">
          Reset
        </button>
        
       {counters.map((counter) => (
          // passing id and access in children component
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncreament={onIncreament}
            counter={counter}
          ></Counter>
        ))} 
      </div>
    );
  } */
}

export default Counters;
