import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  handleIncreament = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
         {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncreament} className="btn m-2 btn-primary">
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
