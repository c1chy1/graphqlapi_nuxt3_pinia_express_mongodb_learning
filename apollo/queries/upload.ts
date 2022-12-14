import { gql } from "graphql-tag";

export const uploads = gql`

    query  {
        
characters {
    id
    image
    gender
    name
}
        
     
    }

`;
