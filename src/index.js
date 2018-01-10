// core 

import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import App from './components/App';

// 1

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


// 2 
const httpLink = new HttpLink({ 
    uri: 'https://server-wrkdejjkco.now.sh/graphql/',
});

const client = new ApolloClient({
    link: httpLink,
    credentials: 'same-origin',
    cache: new InMemoryCache()
  });


// 3
ReactDOM.render(
	<ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
	document.querySelector('#root')
);