import gql from 'graphql-tag'


export const addCharacter = gql`

    mutation ($name:String!,$status: String!, $gender: String, $image: String ){
    addCharacter(name: $name, status:$status, gender: $gender, image:$image) {
        
       name
        status
        gender
        image
    }
    }
`
