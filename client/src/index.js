import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
    state = { 
        students: [], 
        isLoading: true
    }

    componentDidMount() {
        console.log(this.state.students)
        const request = new Request('http://localhost:3300/students', {
	        method: 'GET', 
	        mode: 'cors'
        })
        fetch(request).then( (response) => {
            return response.json()
        }).then( (data) => {
            this.setState( (prevState) => {
                return(
                    {
                        students: data,
                        isLoading: false
                    }
                )
            })
        })
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
                                    {student.name} {student.surname}
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