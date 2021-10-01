import React, { Component } from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      error: "",
    };
  }

  handleChange = (event) => {
    const n = event.target.name;
    const v = event.target.value;

    this.setState({ [n]: v });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // const { name, phone } = this.state;

    // Format the Name
    const name = this.state.name.split(" ");
    const lastName = name.pop();
    const firstName = name.join(" ");

    // Validate Phone Number
    const phoneNums = this.state.phone.replace(/\D/g, "");

    if (phoneNums.length === 10) {
      const phone = `(${phoneNums.slice(0, 3)}) ${phoneNums.slice(
        3,
        6
      )}-${phoneNums.slice(6, 10)}`;

      this.props.onAdd({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      });

      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => (input.value = ""));

      this.setState({
        name: "",
        phone: "",
        error: "",
      });
    } else {
      this.setState({ error: "Please enter a 10-digit phone number" });
    }
  };

  isError = () => `contact-form__error${this.state.error ? " has-error" : ""}`;

  render() {
    return (
      <div className="contact-form">
        <form onSubmit={this.handleSubmit}>
          <h2>Add New Contact</h2>
          <div className="contact-form__fields">
            <div className="contact-form__field">
              <label for="name">First Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="contact-form__field">
              <label for="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className={this.isError()}>{this.state.error}</div>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
