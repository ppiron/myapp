import React, { Component } from 'react'
import {
    Route,
    Switch
  } from 'react-router-dom'
import Home from './home'
import StudentPage from './studentPage'

function Main(props) {
    return (
        <div>
            <Route exact path='/static' component={Home} />
            <Route path='/static/:id' component={StudentPage} />
        </div>
    )
}

export default Main