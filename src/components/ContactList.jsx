import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../css/ContactList.module.css';

export class ContactList extends Component {
  static propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    filter: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      deleteContact: this.props.deleteContact,
    };
  }

  filterContacts(contacts, filter) {
    filter = filter.toLowerCase();

    return contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      return contactName.includes(filter);
    });
  }

  render() {
    const { contacts } = this.props;
    const { filter } = this.props;

    const filteredContacts = this.filterContacts(contacts, filter);

    if (filteredContacts.length > 0)
      return (
        <ul className={css.contacts_container}>
          {filteredContacts.map(contact => (
            <li className={css.contacts_item} htmlFor={contact.id}>
              <p>{contact.name}:</p>
              <p>{contact.number}</p>
              <button
                className={css.contacts_delete_btn}
                type="button"
                onClick={this.state.deleteContact}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      );
    else return;
  }
}
