// Reusable Functional component
import React from "react";
import ReactDOM from "react-dom";

function ContactCard(props) {
  console.info(props);
  return (
    <div
      className="card mt-5 mr-1 ml-1 border border-warning"
      style={{ width: "10rem" }}
    >
      <div class="card-header bg-primary">
        <img className="cardImgTop" src={props.imgUrl} alt="Card image cap" />
      </div>
      <div className="cardBody bg-info">
        <h5 className="cardTitle">{props.title}</h5>
        <p className="cardText">{props.msg}</p>
        <div className="text-center">
          <a href="#" class="btn btn-primary text-center" onClick={() => console.log('called on click event')}>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
