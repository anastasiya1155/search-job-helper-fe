import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Jobs from './Jobs';
import apolloClient from './graphql/config';
import Layout from './Layout/Dashboard';

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <Layout>
        <Switch>
          <Route path="/jobs" component={Jobs} />
          <Route path="/" component={Jobs} />
        </Switch>
      </Layout>
    </Router>
  </ApolloProvider>
);

export default App;
