import React, { Component } from "react";
import { FormComponent } from "../../components/Form/FormComponent";

class UserForm extends Component {
  constructor() {
    super();
    this.initialState = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false,
      submitted: false,
      lastSubmittedData: null,
    };
    this.state = { ...this.initialState };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value, name, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit() {
    const submittedData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      gender: this.state.gender,
      destination: this.state.destination,
      nutsFree: this.state.nutsFree,
      lactoseFree: this.state.lactoseFree,
      isVegan: this.state.isVegan,
    };
    this.setState({
      ...this.initialState,
      lastSubmittedData: submittedData,
      submitted: false, // not needed anymore
    });
  }

  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}

export { UserForm };
