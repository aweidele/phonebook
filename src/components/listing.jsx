import React, { Component } from "react";
import Contact from "./contact";

class Listing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact-list">
          <div className="contact-list__inner">
            <div>
              {this.props.contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  onDelete={this.props.onDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Listing;
