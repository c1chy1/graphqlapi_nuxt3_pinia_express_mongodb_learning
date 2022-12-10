
import { defineNuxtPlugin } from "#app"
import { ApolloClient, InMemoryCache ,	createHttpLink} from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"
import { createUploadLink } from "apollo-upload-client"





export default defineNuxtPlugin((nuxtApp) => {

/*	const httpLink = createHttpLink({
		// You should use an absolute URL here
		uri: "http://localhost:4000/graphql",
	});*/

	const apolloClient = new ApolloClient({

		cache: new InMemoryCache(),
		link: createUploadLink({
			uri: "/graphql",
		}),

	})


	nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})
