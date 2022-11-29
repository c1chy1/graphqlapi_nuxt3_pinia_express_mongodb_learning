import { gql } from "graphql-tag";

export const images = gql`

    query Images {

        images {
            name
            id
            url
        }
    }

`;
