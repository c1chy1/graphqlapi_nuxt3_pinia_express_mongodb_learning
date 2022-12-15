const { gql } = require('apollo-server-express')

const typeDefs = gql`

    scalar Upload
    type Character {
        id: ID
        name: String!
        status: String!
        gender: String
        image: String
        # origin: [Location]
    }


  type Photo {
    filename: String!
    path: String
    }
    
    
    type File {
        filename: String!
        mimetype: String!
        encoding: String!
    }
    
    
    type Query {
        
        allFiles :[File]
        allPhotos: [Photo]
        characters: [Character]
        character(id: ID!): Character
    }

    type Mutation {
        uploadFile(file: Upload!): File!
        addCharacter(name: String!, status: String!, gender: String, image: String): Character
        uploadPhoto(photo: Upload!): Photo!
    }
    
`


module.exports = typeDefs
