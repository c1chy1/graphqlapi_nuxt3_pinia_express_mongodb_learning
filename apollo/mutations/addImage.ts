import gql from 'graphql-tag'


export const addImage = gql`

    mutation addBook($book:BookInput!){
    addBook(book: $book) {
        
        title
        id
    }
    }
`
