import axios from 'axios';

// Action Types
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

// Action Creators
export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  };
};

export const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books
  };
};

export const fetchBooksFailure = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  };
};

export const fetchBooks = (query) => {
  return (dispatch) => {
    dispatch(fetchBooksRequest());
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAQmHR7JZVqmd-uNoOCi2cBrtVz4dm93ds&maxResults=40`)
      .then(response => {
        const books = response.data.items
        console.log(books)
        dispatch(fetchBooksSuccess(books));
      })
      .catch(error => {
        dispatch(fetchBooksFailure(error.message));
      });
  };
};
