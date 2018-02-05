import React, { Component } from 'react'

class StudentPage extends Component {
    state = {
        student: {},
        isLoading: true
    }
    componentDidMount() {
        console.log(this.state.student)
        const studentID = this.props.match.params.id
        const request = new Request(`http://localhost:3300/students/${studentID}`, {
	        method: 'GET', 
	        mode: 'cors'
        })
        fetch(request).then( (response) => {
            return response.json()
        }).then( (data) => {
            this.setState( (prevState) => {
                return(
                    {
                        student: data,
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
                    Name: {this.state.student.name}                    
                </div>
            )
        }
    }

}

export default StudentPage