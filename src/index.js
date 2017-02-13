import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js'

// Components
import App from './App';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import Profile from './profile/Profile';
import store from './store';

// Config
import truffleConfig from './../truffle-config.js'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
          {/*<Route path="*" component={Status404} />*/}
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
