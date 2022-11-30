import gql from 'graphql-tag'


export const addImage = gql`

    mutation singleUpload($file:Upload!){
        singleUpload(file:$file) {
        filename
        encoding
        mimetype
    }
    }
`
