module.exports =  `
    type User {
      id: ID!
      username: String!
      email: String!
      age: Float!
    }

    type Query {
      speakUser(id: ID!): User!
      allUsers: [User!]
    }

    type Mutation {
      createUser(username: String!, email: String!, age: Float!): User!
    }
`
