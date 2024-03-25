import React, { Component } from "react";
import { FormComponent1 } from "../../components/Form/FormComponent1";

class UserForm1 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name, type, checked } = e.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return <FormComponent1 handleChange={this.handleChange} {...this.state} />;
  }
}

export { UserForm1 };
