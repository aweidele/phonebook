import "./App.scss";
import React from "react";
import ContactForm from "./components/contactForm";
import Listing from "./components/listing";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          first: "Tony",
          last: "Stark",
          phone: "123-456-7890",
          fav: false,
        },
        {
          id: 2,
          first: "Bruce",
          last: "Banner",
          phone: "987-654-3210",
          fav: false,
        },
        {
          id: 3,
          first: "Natasha",
          last: "Romanoff",
          phone: "234-567-8901",
          fav: true,
        },
        {
          id: 4,
          first: "Thor",
          last: "Odinson",
          phone: "876-543-2109",
          fav: false,
        },
        {
          id: 5,
          first: "Clint",
          last: "Barton",
          phone: "345-678-9012",
          fav: false,
        },
        {
          id: 6,
          first: "Steve",
          last: "Rogers",
          phone: "765-432-1098",
          fav: false,
        },
      ],
    };
    this.handleSort(this.state.contacts);
  }

  handleSort = (contacts) => {
    contacts.sort(function (a, b) {
      if (a.fav === b.fav) {
        return a.last > b.last ? 1 : -1;
      } else {
        return a.fav < b.fav ? 1 : -1;
      }
    });
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
      fav: false,
    });
    this.handleSort(contacts);
    // this.setState({ contacts });
  };

  handleFav = (contactID) => {
    const contacts = [...this.state.contacts];
    const row = contacts.findIndex((element) => element.id === contactID);
    contacts[row].fav = contacts[row].fav ? false : true;
    this.handleSort(contacts);
  };

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
            onFav={this.handleFav}
          />
        </div>
      </div>
    );
  }
}

export default App;
