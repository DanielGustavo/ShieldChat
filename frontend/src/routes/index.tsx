import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Chat from '../pages/Chat';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Chat} isPrivate />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
