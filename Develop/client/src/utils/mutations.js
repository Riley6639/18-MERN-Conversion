import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      savedBooks {
        bookId
        description
        image
        link
        title
        authors
      }
      password
      email
      bookCount
      _id
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      bookCount
      email
      password
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation SaveBook($bookId: String!, $description: String!, $authors: [String], $title: String, $image: String, $link: String) {
  saveBook(bookId: $bookId, description: $description, authors: $authors, title: $title, image: $image, link: $link) {
    _id
    bookCount
    email
    password
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}
`;

export const REMOVE_BOOK = gql`
mutation SaveBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
    email
    password
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}
`;