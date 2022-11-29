import { gql } from "graphql-tag";

export const upload = gql`

    mutation ($file: Upload!) {
        uploadFile(file: $file) {
            filename
        }
    }

`;
