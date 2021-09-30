import React, { Component } from "react";

class Contact extends React.Component {
  render() {
    const { first, last, id, phone } = this.props.contact;
    return (
      <div>
        <span>
          {first} {last}
        </span>
        <span>{phone}</span>
        <button onClick={() => this.props.onDelete(id)}>Delete</button>
      </div>
    );
  }
}

export default Contact;
