import gql from 'graphql-tag'


export const imageCreate = gql`

    mutation ImageCreate($name: String!,$url: String!) {
 imageCreate(url: $url,name: $name){
     
     name
     url
     id
 }
    }
`
