import React, { Component } from "react";

class Contact extends React.Component {
  render() {
    const { first, last, id, phone } = this.props.contact;
    return (
      <div class="contact-list__row">
        <div>
          <button>
            <i class="far fa-star"></i>
          </button>
        </div>
        <div>
          {first} {last}
        </div>
        <div>{phone}</div>
        <div>
          <button onClick={() => this.props.onDelete(id)}>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
