const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Character {
        id: ID
        name: String!
        status: String!
        gender: String
        image: String
        # origin: [Location]
    }
    type Query {
        characters: [Character]
        character(id: ID!): Character
    }

    type Mutation {
        addCharacter(name: String!, status: String!, gender: String, image: String): Character
    }
    
`


module.exports = typeDefs
