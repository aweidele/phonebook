import React, { Component } from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
    };
  }

  handleChange = (event) => {
    const n = event.target.name;
    const v = event.target.value;

    this.setState({ [n]: v });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state);

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));

    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
    });
  };

  render() {
    return (
      <div className="contact-form">
        <form onSubmit={this.handleSubmit}>
          <h2>Add New Contact</h2>
          <label for="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={this.handleChange}
          />
          <label for="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={this.handleChange}
          />
          <label for="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
