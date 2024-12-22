import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    username
    email   
    password
  }
}
`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    email
    password
  }
}
`;

export const SAVE_BOOK = gql`
mutation SaveBook($bookId: String!, $description: String!) {
  saveBook(bookId: $bookId, description: $description) {
    bookId
    description
    authors
    title
    image
    link
  }
}
`;

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    bookId  
  }
}
`;