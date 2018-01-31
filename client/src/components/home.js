import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
import Students from './students'
import Student from './student'

class Home extends Component {
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
                    <Route exact path='/static' render={() => (
                        <Students students={this.state.students} />
                    )}>
                    </Route>
                    <Route path='/static/:id' render={({match}) => {
                        const Selectedstudent = this.state.students.filter( (student) => {
                            return student.id === parseInt(match.params.id)
                        })
                        console.log(Selectedstudent)
                        return <Student data={Selectedstudent[0]}/>
                    }}>
                    </Route>
                    
                </div>
            )
        }
    }
    
}

export default Home