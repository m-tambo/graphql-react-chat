import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/index.css'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset'
import { split } from "apollo-link"
import { WebSocketLink } from "apollo-link-ws"
import { getMainDefinition } from "apollo-utilities"
import SERVICE_ID from './.env' 

const httpLink = new HttpLink({ uri: `https://api.graph.cool/simple/v1/${SERVICE_ID}` })

const wsLink = new WebSocketLink({
  uri: `wss://subscriptions.graph.cool/v1/${SERVICE_ID}`,
  options: {
    reconnect: true
  }
})

const isSubscription = gqlOperation => {
  const { kind, operation } = getMainDefinition(gqlOperation.query)
  return kind === 'OperationDefinition' && operation === 'subscription'
}

const link = split( // Routes subscriptions to wsLink and queries to httpLink
  isSubscription,
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link,  // same as `link: link`
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
