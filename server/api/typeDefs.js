const {gql } = require("apollo-server-express");




const typeDefs = gql`
    scalar Upload

    type File {
        id: ID
        filename: String
        photoURL : String
        path: String
    }


    type Query {

        uploads: [File]

    }


    type Mutation {

        singleUpload(file: Upload): File

    }
`;



/*
const typeDefs = gql`
    type Image {
        name: String
        url: String
        inNato: Boolean
        id: ID!
    }
    type Query {
        images(filter:ID): [Image],
    }

    input imageInput {

        name: String
        url: String
        inNato: Boolean
        id: ID!
    }

    type Mutation {
        imageCreate(item:imageInput!): Image

    }
`;
*/

module.exports = typeDefs;
