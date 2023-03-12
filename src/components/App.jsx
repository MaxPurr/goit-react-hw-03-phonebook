import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from '../css/Container.module.css';

export class App extends Component {
  constructor() {
    super();
    this.addContact = this.addContact.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.deleteContact = this.deleteContact.bind(this);

    this.state = {
      contacts: [],
      filter: '',
    };
  }
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      console.log(contacts);
      this.setState({ contacts });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  updateFilter(evt) {
    this.setState({
      filter: evt.target.value,
    });
  }

  addContact(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      let newContacts = this.state.contacts;
      const number = form.elements.number.value;
      const id = nanoid();
      newContacts.push({ id: id, name: name, number: number });
      this.setState({
        contacts: newContacts,
      });
      form.reset();
    }
  }

  deleteContact(evt) {
    const id = evt.target.parentNode.getAttribute('for');
    let newContacts = this.state.contacts;
    newContacts.forEach((contact, index) => {
      if (contact.id === id) {
        newContacts.splice(index, 1);
      }
    });
    this.setState({
      contacts: newContacts,
    });
  }

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Phonebook addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter updateFilter={this.updateFilter} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
