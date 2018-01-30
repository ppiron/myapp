import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import { render } from 'react-dom'
import Home from './components/home'

class App extends Component {
    render() {
        return (
            <Home />
        )
    }
}

render((
    <Router>
        <App />
    </Router>
), document.getElementById('root'))