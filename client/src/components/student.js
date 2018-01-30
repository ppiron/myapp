import React from 'react'
import { Link } from 'react-router-dom'

function Student(props) {
    return (
        <Link to={`/static/${props.data.id}`}>
            <li>
                Name: {props.data.name}
                <br />
                Surname: {props.data.surname}
            </li>
        </Link>
    )
}

export default Student