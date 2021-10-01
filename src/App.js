import "./App.scss";
import React from "react";
import ContactForm from "./components/contactForm";
import Listing from "./components/listing";

class App extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        first: "Tony",
        last: "Stark",
        phone: "123-456-7890",
      },
      {
        id: 2,
        first: "Bruce",
        last: "Banner",
        phone: "987-654-3210",
      },
      {
        id: 3,
        first: "Natasha",
        last: "Romanoff",
        phone: "234-567-8901",
      },
      {
        id: 4,
        first: "Thor",
        last: "Odinson",
        phone: "876-543-2109",
      },
      {
        id: 5,
        first: "Clint",
        last: "Barton",
        phone: "345-678-9012",
      },
      {
        id: 6,
        first: "Steve",
        last: "Rogers",
        phone: "765-432-1098",
      },
    ],
  };

  handleSort = () => {
    const contacts = [...this.state.contacts];
    contacts.sort((a, b) => (a.last > b.last ? 1 : -1));
    this.setState({ contacts });
  };

  handleDelete = (contactID) => {
    const contacts = this.state.contacts.filter((c) => c.id != contactID);
    console.log(contacts);
    this.setState({ contacts });
  };

  handleAdd = (formFields) => {
    const contacts = [...this.state.contacts];
    const { firstName, lastName, phone } = formFields;
    contacts.push({
      id: contacts.length + 1,
      first: firstName,
      last: lastName,
      phone: phone,
    });
    this.setState({ contacts });
  };

  // handleInputChange = (event) => {
  //   console.log(event);
  // };

  render() {
    return (
      <div class="phonebook">
        <div class="phonebook__inner">
          <ContactForm onAdd={this.handleAdd} />
          <Listing
            key={this.state.id}
            contacts={this.state.contacts}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;