import { defineNuxtPlugin } from "#app"
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client/core"
import { DefaultApolloClient , provideApolloClient} from "@vue/apollo-composable"

import { useApolloClient } from '@vue/apollo-composable'

// export an apollo client instance
export const useClient = () => {
  const { resolveClient } = useApolloClient()
  return resolveClient()
}


export default defineNuxtPlugin((nuxtApp) => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql', // your endpoint
    headers: {
      // your headers
    },
  })

  const cache = new InMemoryCache()
  let apolloClient: ApolloClient<any>


  if (process.server) {
    apolloClient = new ApolloClient({
      ssrMode: true,
      link: httpLink,
      cache,
    })
    nuxtApp.hook('app:rendered', () => {
      nuxtApp.payload.data.apollo = apolloClient.extract()
    })
  }
  else {
    apolloClient = new ApolloClient({
      link: httpLink,
      cache,
    })
  }

  provideApolloClient(apolloClient)
  nuxtApp.provide('apollo', { DefaultApolloClient, apolloClient })
})
