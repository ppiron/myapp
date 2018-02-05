import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <nav>
            <ul>
                <li><Link to={`/static/`}>Home</Link></li>
                <li><Link to={`/static/invoices`}>Invoices</Link></li>
            </ul>
        </nav>
    )
}

export default Header