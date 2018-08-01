import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {HashRouter, Route, Switch} from 'react-router-dom';

import About from './components/About'
import History from './components/History'
import Store from './components/Store'
import StoreLanding from './components/StoreLanding'


ReactDOM.render(
<HashRouter>
    <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/history" component={History}/>
    <Route path="/storelanding" component={StoreLanding}/>
    <Route path="/store/:id" component={Store}/>
    </Switch>
</HashRouter>
, document.getElementById('root'));
