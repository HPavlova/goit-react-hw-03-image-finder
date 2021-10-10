import { Component } from 'react';
import propTypes from 'prop-types';

import { toast } from 'react-toastify';

import ImageGalleryItem from './ImageGalleryItem';
import Load from './Load';

class ImageGallery extends Component {
  render() {
    const { images, status, setModalImg } = this.props;

    if (status === 'idle') {
      return toast.error('Введите название изображения');
    }

    if (status === 'pending') {
      return <Load />;
    }

    if (status === 'rejected') {
      return toast.error('Упс! Что-то пошло не так');
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          {images.map(({ webformatURL, largeImageURL, tags, id }) => (
            <ImageGalleryItem
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageUR={largeImageURL}
              status={status}
              setModalImg={setModalImg}
            />
          ))}
        </ul>
      );
    }
  }
}

ImageGallery.propTypes = {
  images: propTypes.array.isRequired,
  status: propTypes.string.isRequired,
  setModalImg: propTypes.func.isRequired,
};

export default ImageGallery;
