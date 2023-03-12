import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../css/Phonebook.module.css';

export class Phonebook extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      addContact: this.props.addContact,
      name: '',
      number: '',
    };
  }

  render() {
    return (
      <form
        onSubmit={this.state.addContact}
        className={css.phonebook_container}
      >
        <label className={css.phonebook_item}>
          Name
          <input
            className={css.phonebook_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.phonebook_item}>
          Number
          <input
            className={css.phonebook_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.add_contact_btn}>
          Add contact
        </button>
      </form>
    );
  }
}
