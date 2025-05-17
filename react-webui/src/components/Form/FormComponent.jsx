import React from "react";
import "../../styles/Form.css";
import { Container, Card, Form, Button } from "react-bootstrap";

const FormComponent = (props) => {
  return (
    <Container className="apple-bg d-flex justify-content-center align-items-center min-vh-100">
      <Card className="apple-card shadow-lg p-5 w-100" style={{ maxWidth: 600 }}>
        <Card.Body>
          <h2 className="mb-5 text-center apple-title" style={{ fontSize: '2.2rem' }}>Traveler Preference</h2>
          <Form className="apple-form" onSubmit={e => { e.preventDefault(); props.handleSubmit && props.handleSubmit(); }}>
            <Form.Group className="mb-4 row align-items-center" controlId="firstName">
              <Form.Label className="apple-label col-sm-3 col-form-label text-end" style={{fontSize: '1.1rem'}}>First Name</Form.Label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={props.firstName}
                  onChange={props.handleChange}
                  autoComplete="off"
                  className="apple-input"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-4 row align-items-center" controlId="lastName">
              <Form.Label className="apple-label col-sm-3 col-form-label text-end" style={{fontSize: '1.1rem'}}>Last Name</Form.Label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={props.lastName}
                  onChange={props.handleChange}
                  autoComplete="off"
                  className="apple-input"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-4 row align-items-center" controlId="age">
              <Form.Label className="apple-label col-sm-3 col-form-label text-end" style={{fontSize: '1.1rem'}}>Age</Form.Label>
              <div className="col-sm-9">
                <Form.Control
                  type="number"
                  name="age"
                  placeholder="Enter age"
                  value={props.age}
                  onChange={props.handleChange}
                  min={0}
                  className="apple-input"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-4 row align-items-center" controlId="gender">
              <Form.Label className="apple-label col-sm-3 col-form-label text-end" style={{fontSize: '1.1rem'}}>Gender</Form.Label>
              <div className="col-sm-9 d-flex align-items-center gap-4">
                <Form.Check
                  type="radio"
                  label={<span className="apple-radio-label">Male</span>}
                  name="gender"
                  value="male"
                  checked={props.gender === "male"}
                  onChange={props.handleChange}
                  id="gender-male"
                  className="apple-radio"
                  style={{marginRight: '20px'}}
                />
                <Form.Check
                  type="radio"
                  label={<span className="apple-radio-label">Female</span>}
                  name="gender"
                  value="female"
                  checked={props.gender === "female"}
                  onChange={props.handleChange}
                  id="gender-female"
                  className="apple-radio"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-4 row align-items-center" controlId="destination">
              <Form.Label className="apple-label col-sm-3 col-form-label text-end" style={{fontSize: '1.1rem'}}>Select your destination</Form.Label>
              <div className="col-sm-9">
                <Form.Select
                  name="destination"
                  value={props.destination}
                  onChange={props.handleChange}
                  className="apple-input"
                >
                  <option value="">-- Please Choose a destination --</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Japan">Japan</option>
                  <option value="Brazil">Brazil</option>
                </Form.Select>
              </div>
            </Form.Group>
            <Form.Group className="mb-4 row align-items-center" controlId="dietaryRestrictions">
              <Form.Label className="apple-label col-sm-3 col-form-label text-end" style={{fontSize: '1.1rem'}}>Dietary restrictions</Form.Label>
              <div className="col-sm-9 d-flex align-items-center gap-4">
                <Form.Check
                  type="checkbox"
                  label={<span className="apple-checkbox-label">Nuts free</span>}
                  name="nutsFree"
                  checked={props.nutsFree}
                  onChange={props.handleChange}
                  id="nutsFree"
                  className="apple-checkbox"
                />
                <Form.Check
                  type="checkbox"
                  label={<span className="apple-checkbox-label">Lactose free</span>}
                  name="lactoseFree"
                  checked={props.lactoseFree}
                  onChange={props.handleChange}
                  id="lactoseFree"
                  className="apple-checkbox"
                />
                <Form.Check
                  type="checkbox"
                  label={<span className="apple-checkbox-label">Vegan</span>}
                  name="isVegan"
                  checked={props.isVegan}
                  onChange={props.handleChange}
                  id="isVegan"
                  className="apple-checkbox"
                />
              </div>
            </Form.Group>
            <div className="d-grid">
              <Button type="submit" className="apple-btn">
                Submit
              </Button>
            </div>
          </Form>
          <hr />
          {/* Show entered info if submitted or lastSubmittedData exists */}
          {(props.submitted || props.lastSubmittedData) && (
            <div className="entered-info mt-4 apple-info">
              <h4 className="apple-info-title">Entered information:</h4>
              <p>
                <strong>Your name:</strong> {(props.lastSubmittedData ? props.lastSubmittedData.firstName : props.firstName)} {(props.lastSubmittedData ? props.lastSubmittedData.lastName : props.lastName)}
              </p>
              <p>
                <strong>Your age:</strong> {(props.lastSubmittedData ? props.lastSubmittedData.age : props.age)}
              </p>
              <p>
                <strong>Your gender:</strong> {(props.lastSubmittedData ? props.lastSubmittedData.gender : props.gender)}
              </p>
              <p>
                <strong>Your destination:</strong> {(props.lastSubmittedData ? props.lastSubmittedData.destination : props.destination)}
              </p>
              <p className="mb-1">
                <strong>Your dietary restrictions:</strong>
              </p>
              <ul className="ps-3">
                <li>Nuts free: {(props.lastSubmittedData ? props.lastSubmittedData.nutsFree : props.nutsFree) ? "Yes" : "No"}</li>
                <li>Lactose free: {(props.lastSubmittedData ? props.lastSubmittedData.lactoseFree : props.lactoseFree) ? "Yes" : "No"}</li>
                <li>Vegan meal: {(props.lastSubmittedData ? props.lastSubmittedData.isVegan : props.isVegan) ? "Yes" : "No"}</li>
              </ul>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export { FormComponent };
