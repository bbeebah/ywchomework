// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import ShowAll from './components/ShowAll';
import Announce from './components/Announce';
import Interview from './components/Interview';
// import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" title="Repositories"  component={App} />
    <Route path="/showall" component={ShowAll} />
    {/* <Route path="/show" component={Show} /> */}
    <Route path="/announce" component={Announce} />
    <Route path="/interview" component={Interview} />
    
  </Router>
);

export default Routes;