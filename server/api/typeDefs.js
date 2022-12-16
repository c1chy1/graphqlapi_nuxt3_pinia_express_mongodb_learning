import { gql } from 'apollo-server-express';


export const typeDefs = gql`

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
        id: ID!
        photoUrl: String!
        filename: String!
        mimetype: String!
        encoding: String!
    }
    
    
    type Query {
        
        allFiles :[File!]
        allPhotos: [Photo]
        characters: [Character]
        character(id: ID!): Character
    }

    type Mutation {
        uploadFile(file: Upload!): File
        addCharacter(name: String!, status: String!, gender: String, image: String): Character
        uploadPhoto(photo: Upload!): Photo!
    }
    
`



