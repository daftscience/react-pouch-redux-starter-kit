'use strict';

import Settings from './settings';
import App from './app';
import Index from './index';
import NewPerson from './new-person';
import NoMatch from './no-match';
import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

export default React.createClass({
  render() {
    return (
      <Router>
        <Route name="root" path="/" component={App}>
          <IndexRoute name="index" component={Index} />
          <Route name="settings" path="settings" component={Settings}/>
          <Route name="new-person" path="new-person" component={NewPerson}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
});
