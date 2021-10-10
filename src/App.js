import { Component } from 'react';
import './App.css';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/button/Button';
import Modal from './components/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    tags: null,
    webformatURL: null,
    largeImageURL: null,
    error: null,
    showModal: false,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;

    if (prevName !== nextName) {
      this.setState({ status: 'pending', images: [], page: 1 });

      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    const API_KEY = '22966044-c718c1bbe050e09f7279dea2f';

    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          toast.error(`Нет изображения с названием ${query}`),
        );
      })
      .then(array => {
        const images = array.hits;

        this.setState(prevState => ({
          page: prevState.page + 1,
          images: [...prevState.images, ...images],
          status: 'resolved',
        }));
        if (page !== 1) {
          this.handleScroll();
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  setModalImg = ({ largeImageURL, tags }) => {
    this.setState({ largeImageURL, tags });
    this.toggleModal();
  };

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onSubmit = query => {
    this.setState({ query: query });
  };

  onLoadMore = () => {
    this.fetchImages();
  };

  render() {
    const { images, status, showModal, tags, webformatURL, largeImageURL } =
      this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          images={images}
          tags={tags}
          webformatURL={webformatURL}
          largeImageUR={largeImageURL}
          status={status}
          setModalImg={this.setModalImg}
        />
        {images.length > 0 && <Button onLoadMore={this.onLoadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <ToastContainer />
      </>
    );
  }
}

export default App;
