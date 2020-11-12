// Reusable Functional component
import React from "react";
import ReactDOM from "react-dom";
import ContactCard from "./07EventHandling";

function ContactCards(props) {
  console.info(props);
  return (
    <div className="row">
      <div className="col-3 text-center">
        <ContactCard
          imgUrl="https://source.unsplash.com/random/100x100"
          title="First"
          msg="First message"
        />
      </div>
      <div className="col-3 text-center">
        <ContactCard
          imgUrl="https://source.unsplash.com/user/erondu/100x100"
          title="Second"
          msg="Second message"
        />
      </div>
      <div className="col-3 text-center">
        <ContactCard
          imgUrl="https://source.unsplash.com/random/100x100"
          title="Third"
          msg="Third message"
        />
      </div>
      <div className="col-3 text-center">
        <ContactCard
          imgUrl="https://source.unsplash.com/user/erondu/100x100"
          title="Fourth"
          msg="Fourth message"
        />
      </div>
    </div>
  );
}

export default ContactCards;
