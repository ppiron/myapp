import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
    state = { votes: 0 }
    handlePlus = () => {
        this.setState(prevState => ({ votes: prevState.votes + 1 }))
    }
    handleMinus = () => {
        this.setState(prevState => ({ votes: prevState.votes - 1 }))
    }
    reset = () => {
        this.setState(prevState => ({ votes: 0 }))
    }
    render() {
        return (
            <div>
                <div className='header header--centered'>
                    Number of Votes: { this.state.votes }
                </div>
                <div className='buttons buttons--centered'>
                    <div className='buttons buttons--spaced'>
                        <PlusButton handleClick={ this.handlePlus }/>
                        <MinusButton handleClick={ this.handleMinus }/>
                    </div>
                    <ResetButton handleClick={ this.reset }/>
                </div>
            </div>
        )
    }
}

const PlusButton = (props) => {
    return (
        <div className='button' onClick={ props.handleClick }><p>+</p></div>
    )
}

const MinusButton = (props) => {
    return (
        <div className='button button--minus' onClick={ props.handleClick }>-</div>
    )
}

const ResetButton = (props) => {
    return (
        <div className='button button--reset button--centered' onClick={ props.handleClick }>Reset</div>
    )
}

render(
    <App />,
    document.getElementById('root')
)