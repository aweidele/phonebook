import "./App.scss";
import React from "react";
import ContactForm from "./components/contactForm";
import Listing from "./components/listing";
import contactsData from "./contacts.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: contactsData,
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
    const id =
      Math.max.apply(
        Math,
        contacts.map((c) => c.id)
      ) + 1;

    contacts.push({
      id: id,
      first: firstName,
      last: lastName,
      phone: phone,
      fav: false,
    });

    this.handleSort(contacts);
  };

  handleFav = (contactID) => {
    const contacts = [...this.state.contacts];
    const row = contacts.findIndex((element) => element.id === contactID);
    contacts[row].fav = contacts[row].fav ? false : true;
    this.handleSort(contacts);
  };

  render() {
    return (
      <div className="phonebook">
        <div className="phonebook__inner">
          <header>
            <h1>Aaron's React Phonebook</h1>
          </header>
          <ContactForm onAdd={this.handleAdd} contacts={this.state.contacts} />
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
