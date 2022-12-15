import gql from 'graphql-tag'


export const uploadFile = gql`

    mutation ($file: Upload!) {
        
     uploadFile(file: $file) {
         filename
         encoding
         mimetype
     }
        
    }
`
