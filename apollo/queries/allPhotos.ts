import {gql} from "graphql-tag";

export const allPhotos = gql`

    query  {

        allPhotos {
            filename
        }


    }

`;
