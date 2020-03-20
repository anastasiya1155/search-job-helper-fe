import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Jobs from './Jobs';
import Interviews from './Interviews';
import apolloClient from './graphql/config';
import Layout from './Layout/Dashboard';
import TableCompare from './Table';
import Notes from './Notes';

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <Layout>
        <Switch>
          <Route path="/table" component={TableCompare} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/interviews" component={Interviews} />
          <Route path="/notes" component={Notes} />
          <Route path="/" component={Jobs} />
        </Switch>
      </Layout>
    </Router>
  </ApolloProvider>
);

export default App;
