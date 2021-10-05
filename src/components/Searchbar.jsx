import React from 'react';
// import propTypes from 'prop-types';

const Searchbar = onSubmit => {
  <header className="Searchbar">
    <form className="SearchForm">
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>;
};

Searchbar.propTypes = {
  // onDeleteContact: propTypes.func,
  // contacts: propTypes.arrayOf(propTypes.object),
  // contact: propTypes.shape({
  //   id: propTypes.string.isRequired,
  //   name: propTypes.string.isRequired,
  //   number: propTypes.string.isRequired,
  // }),
};

export default Searchbar;
