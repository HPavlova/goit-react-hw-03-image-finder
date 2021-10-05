import React from 'react';
// import propTypes from 'prop-types';

const Button = () => {
  <button>Load more</button>;
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

Button.propTypes = {
  // onDeleteContact: propTypes.func,
  // contacts: propTypes.arrayOf(propTypes.object),
  // contact: propTypes.shape({
  //   id: propTypes.string.isRequired,
  //   name: propTypes.string.isRequired,
  //   number: propTypes.string.isRequired,
  // }),
};

export default Button;
