import React, { Component } from 'react'
import { render } from 'react-dom'
import fakeData from './mock_data.js'

class App extends Component {
    state = { 
        students: [], 
        isLoading: true
    }

    componentDidMount() {
        console.log(this.state.students)
        console.log(fakeData)
        let timer = setTimeout( () => {
            this.setState( prevState => {
                return (
                    {
                        students: fakeData,
                        isLoading: false
                    }
                )
            })
            console.log(this.state)
        }, 1000)
    }
    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        {this.state.students.map(student => {
                            return(
                                <li key={student.id}>
                                    {student.first_name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }
}

render(
    <App />,
    document.getElementById('root')
)