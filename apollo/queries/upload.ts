import { gql } from "graphql-tag";

export const uploads = gql`

    query {
        
        uploads {
            mimetype
            encoding
            filename
        }
    }

`;
