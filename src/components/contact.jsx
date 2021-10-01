import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import avatar from "../avatar.png";

class Contact extends React.Component {
  getRowClasses(fav) {
    let classes = "contact-list__row";
    if (fav) classes += " fav";
    return classes;
  }

  render() {
    const { first, last, id, phone, fav } = this.props.contact;
    return (
      <div class={this.getRowClasses(fav)}>
        <div className="contact-list__fav">
          <button className="btn btn-icon">
            <FontAwesomeIcon icon={faStar} />
          </button>
        </div>
        <div className="contact-list__avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="contact-list__name">
          <span>
            {first} {last}
          </span>
        </div>
        <div className="contact-list__phone">
          <span class="phone-icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>{" "}
          {phone}
        </div>
        <div className="contact-list__delete">
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
