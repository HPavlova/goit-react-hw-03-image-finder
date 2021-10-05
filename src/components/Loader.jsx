import React from 'react';
// import propTypes from 'prop-types';

import Loader from 'react-loader-spinner';
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}

Loader.propTypes = {
  // onDeleteContact: propTypes.func,
  // contacts: propTypes.arrayOf(propTypes.object),
  // contact: propTypes.shape({
  //   id: propTypes.string.isRequired,
  //   name: propTypes.string.isRequired,
  //   number: propTypes.string.isRequired,
  // }),
};
