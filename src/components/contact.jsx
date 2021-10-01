import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  render() {
    const { first, last, id, phone } = this.props.contact;
    return (
      <div class="contact-list__row">
        <div>
          <button className="btn btn-icon">
            <FontAwesomeIcon icon={faStar} />
          </button>
        </div>
        <div>
          {first} {last}
        </div>
        <div>{phone}</div>
        <div>
          <button
            className="btn btn-icon"
            onClick={() => this.props.onDelete(id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
