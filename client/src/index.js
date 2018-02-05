import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import { render } from 'react-dom'
import Main from './components/main'
import Header from './components/header'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

render((
    <Router>
        <App />
    </Router>
), document.getElementById('root'))