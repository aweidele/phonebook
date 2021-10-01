import React, { Component } from "react";
import Contact from "./contact";

class Listing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact-list">
          <div className="contact-list__inner">
            <div>
              {this.props.contacts.map((contact, i) => (
                <Contact
                  key={i}
                  contact={contact}
                  onDelete={this.props.onDelete}
                  onFav={this.props.onFav}
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
