import React from 'react'
import Student from'./student'

function Students(props) {
    const students = props.students.map( (student) => {
        return (
            <Student key={student.id} data={student} />
        )
    })

    return (
        <ul>
            {students}
        </ul>
    )
}

export default Students