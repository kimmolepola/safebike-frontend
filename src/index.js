import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider, ApolloClient, InMemoryCache,
} from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  // uri: 'https://kimmolepola-bicycle-forks-backend.azurewebsites.net/graphql',
  uri: 'http://localhost:7071/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
