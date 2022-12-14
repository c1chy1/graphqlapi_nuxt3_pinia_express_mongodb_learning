import { gql } from "graphql-tag";

export const uploadPhoto = gql`

    mutation uploadPhoto($photo: Upload!) {
        uploadPhoto(photo: $photo) {
            filename
            path
        }
    }

`;
