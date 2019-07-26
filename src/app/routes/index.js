import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from 'features/Home';
import { Settings } from 'features/Settings';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/profile" render={() => (
      <div className="offset-3 mt-5">
        <h2>Page under development</h2>
        <h5 className="text-secondary offset-1">Re-visit again soon</h5>
      </div>
    )} />
    <Route render={() => <h1>Page not found</h1>} />
  </Switch>
);
