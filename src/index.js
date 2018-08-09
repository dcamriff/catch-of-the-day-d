import React from 'react'
import { render } from 'react-dom'

import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './css/style.css'
import App from './components/App'

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exactly pattern="/" component={StorePicker} />
                <Route pattern="/store/:storeId" component={App} />
                <Switch component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render (<App />, document.querySelector('#main'));