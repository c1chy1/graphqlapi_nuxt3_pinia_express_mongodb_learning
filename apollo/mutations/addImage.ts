import gql from 'graphql-tag'


export const addImage = gql`

    mutation addPost($data:PostInput!,$file:Upload!){
        result: addPost(data: $data, file:$file)
    }
`
