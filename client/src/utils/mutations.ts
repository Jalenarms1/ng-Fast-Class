import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
                email

            }
            
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            token
            user {
                _id
                username
                email  

            }
        }
    }
`

export const ADD_CLASS = gql`
    mutation addClass($subject: String!, $courseName: String!) {
        addClass(subject: $subject, courseName: $courseName) {
            _id
            subject
            courseName
            open
            teacher {
                _id
                username
                email
            }
            students {
                _id
                username
                email
            }
        }
    }
`