
//  Handling events
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  
  /*
  constructor() {
    super();
    // bind the conter object
    this.handleIncreament = this.handleIncreament.bind(this);
  }
  */

  //  Error function
  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncreament} className="btn m-2 btn-primary">
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
