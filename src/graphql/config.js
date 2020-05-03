import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token || '',
      },
    });
  },
  onError: error => {
    console.log(error);
    if (error.graphQLErrors[0].extensions.code === 'UNAUTHENTICATED') {
      window.location.href = '/login';
    }
  },
});

export default client;
