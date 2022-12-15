import { gql } from "graphql-tag";

export const allFiles = gql`

    query {

    allFiles {
        filename
        mimetype
        encoding
    }
    }

`;
