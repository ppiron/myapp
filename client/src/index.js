import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import { render } from 'react-dom'
import Home from './components/home'
import Student from './components/student'

// class App extends Component {
//     render() {
//         return (
//             <Home />
//         )
//     }
// }

render((
    <Router>
        <Home />
    </Router>
), document.getElementById('root'))