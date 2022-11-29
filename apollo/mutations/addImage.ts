import gql from 'graphql-tag'


export const addImage = gql`

    mutation singleUpload($file:Upload!){
    addImage(file:$file) {
        filename
        encoding
        mimetype
    }
    }
`
