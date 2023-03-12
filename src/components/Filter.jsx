import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../css/Filter.module.css';

export class Filter extends Component {
  static propTypes = {
    updateFilter: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      updateFilter: this.props.updateFilter,
    };
  }

  render() {
    return (
      <div className={css.filter_container}>
        <p className={css.filter_text}>Find contacts by name</p>
        <input
          className={css.filter_input}
          type="text"
          onChange={this.state.updateFilter}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    );
  }
}
