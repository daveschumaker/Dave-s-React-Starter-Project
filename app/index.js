import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/App.jsx';

import './scss/base.scss';

// ReactDOM.render(<App />, document.getElementById('app'));
render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
), document.getElementById('app'));
