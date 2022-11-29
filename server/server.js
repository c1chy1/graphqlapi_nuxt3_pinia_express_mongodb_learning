/*
import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import graphql from 'graphql'
import cors from 'cors'



const app = express()

const QueryRoot = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: graphql.GraphQLString,
            resolve: () => "Hello world!"
        }
    })
})

const schema = new graphql.GraphQLSchema({ query: QueryRoot });
app.use(cors())

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);

console.log(express)
console.log(graphqlHTTP)
console.log(graphql)
export default app
*/
