import React from 'react';
// import propTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = () => {
  <ul className="ImageGallery">
    <ImageGalleryItem />
  </ul>;
};

ImageGallery.propTypes = {
  // onDeleteContact: propTypes.func,
  // contacts: propTypes.arrayOf(propTypes.object),
  // contact: propTypes.shape({
  //   id: propTypes.string.isRequired,
  //   name: propTypes.string.isRequired,
  //   number: propTypes.string.isRequired,
  // }),
};

export default ImageGallery;
