import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, hashHistory} from 'react-router-dom';

import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const routes = 
  <Route component={App}>
  <Route path="/results" component={Results} />
  <Route path="/" component={Voting} />
</Route>;


const Root = () => (
  <App>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Voting} />
       
      </Switch>
    </BrowserRouter>
  </App>
);
ReactDOM.render(
  <Root/>,
  document.getElementById('app')
);