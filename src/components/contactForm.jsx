import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      error: "",
    };
  }

  // Handle typing in the form fields
  handleChange = (event) => {
    const n = event.target.name;
    const v = event.target.value;

    this.setState({ [n]: v });
  };

  // Submit form
  handleSubmit = (event) => {
    event.preventDefault();
    let errorMsg = "";

    // Format the Name
    const nameState = this.state.name;
    const name = nameState.split(" ");
    const lastName = name.pop();
    const firstName = name.join(" ");

    // Check if name is blank
    if (!nameState) {
      errorMsg = "Please enter a name";
    }

    // Check for duplicates
    const dup = this.props.contacts
      .map((c) => `${c.first} ${c.last}`)
      .find((n) => n === nameState);
    if (dup) {
      errorMsg = "Entry already exists";
    }

    // Validate Phone Number
    const phoneNums = this.state.phone.replace(/\D/g, "");
    let phone = "";
    if (phoneNums.length === 10) {
      phone = `(${phoneNums.slice(0, 3)}) ${phoneNums.slice(
        3,
        6
      )}-${phoneNums.slice(6, 10)}`;
    } else {
      errorMsg = "Please enter a 10-digit phone number";
    }

    // Submit if there are no errors
    if (errorMsg) {
      this.setState({ error: errorMsg });
    } else {
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
    }
  };

  // Rendering the error message
  isError = () => `contact-form__error${this.state.error ? " has-error" : ""}`;

  render() {
    return (
      <div className="contact-form">
        <form onSubmit={this.handleSubmit}>
          <h2>Add New Contact</h2>
          <div className="contact-form__fields">
            <div className="contact-form__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className={this.isError()}>{this.state.error}</div>
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faPlus} />
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
