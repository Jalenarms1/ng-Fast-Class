const { gql } = require("apollo-server-express");

let typeDefs = gql`
  
  type User {
    _id: ID
    username: String
    email: String
    
    
  }

  type Classroom {
    _id: ID
    subject: String
    courseName: String
    open: Boolean
    teacher: User
    students: [User]
  }

  type TestGet {
    key: String
  }

  type Auth {
    token: ID
    user: User
  }

 

  type Query {
    
    user: User
    
    testGet: TestGet
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String): User
    deleteUser(_id: ID!): User
    login(username: String!, password: String!): Auth
    addClass(subject: String!, courseName: String!): Classroom
    
  }
`;

module.exports = typeDefs;
