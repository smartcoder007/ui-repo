import React, { Component } from "react";
import { AutoCompletedText } from "../../components/AutoComple/AutoCompletedText";
import "../../styles/AutoComplete.css";

class AutoComplete extends Component {
  render() {
    return (
      <div className="App">
        <AutoCompletedText />
      </div>
    );
  }
}

export { AutoComplete };
