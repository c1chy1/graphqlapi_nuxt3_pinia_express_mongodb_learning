
import express from 'express'
import {ApolloServer } from "apollo-server-express";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(graphqlUploadExpress())
app.use('/static', express.static('static'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})


const server = new ApolloServer({ typeDefs, resolvers});


server.start().then((res) => {
    server.applyMiddleware({
        app,
        path: '/graphql',
        cors: true,

    });
});


app.listen({ port: 3000 }, () =>
    console.log(
        `GraphQL Server running @ http://localhost:3000${server.graphqlPath}`
    )
);

export default app

