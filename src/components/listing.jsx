import React, { Component } from "react";
import Contact from "./contact";

class Listing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.onSort()}>Sort</button>
        <div className="contact-list">
          {this.props.contacts.map((contact) => (
            <Contact contact={contact} onDelete={this.props.onDelete} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Listing;
