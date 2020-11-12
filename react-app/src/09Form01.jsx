import React, { Component } from "react";

class Form01 extends Component {
  state = {
    firstName: "",
    lasttName: "",
    isChecked: false,
    gender: "",
    comment: "",
    colors: "",
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          // bind the  form input fields
          // [event.target.name]: event.target.value,
          [name]: value,
        });
  }

  render() {
    return (
      <React.Fragment>
        <p className="mt-5">Test Form </p>
        <form className="mt-5 text-primary">
          <div className="form-group row text-center">
            <label className="col-form-label">User Form</label>
          </div>
          <div className="form-group row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              firstName
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={this.handleChange}
                placeholder="first name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={this.handleChange}
                placeholder="last name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">isChecked</label>
            <div className="col-sm-10">
              <input
                type="checkbox"
                className="form-control"
                name="isChecked"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="male"
                onChange={this.handleChange}
              />
              male
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="female"
                onChange={this.handleChange}
              />
              female
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">comments</label>
            <div className="col-sm-10">
              <textarea name="comment" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Selectcolors</label>
            <div className="col-sm-10">
              <select
                name="colors"
                value={this.state.colors}
                onChange={this.handleChange}
              >
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="green">green</option>
                <option></option>
              </select>
            </div>
          </div>
        </form>
        <h1 className="bg-primary">
          {this.state.firstName + " "}
          {this.state.lastName}
        </h1>
        <h1 className="bg-info">
          Checkbox Status : {this.state.isChecked + " "}
        </h1>
        <h1 className="bg-primary">You are : {this.state.gender + " "}</h1>
        <h1 className="bg-danger">
          Your selected color : {this.state.colors + " "}
        </h1>
        <h1 className="bg-danger">
          Your comments : {this.state.comment + " "}
        </h1>
      </React.Fragment>
    );
  }
}

export default Form01;
