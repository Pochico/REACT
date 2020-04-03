import React from 'react'
import { Link } from 'react-router-dom'
import { home, contact, spain } from '../conf/routes'

const MainMenu = () => (
    <nav>
        <ul>
            <li>
                <Link to={home()}>Home</Link>
            </li>
            <li>
                <Link to={spain()}>España</Link>
            </li>
            <li>
                <Link to={contact()}>Contacto</Link>
            </li>
        </ul>
    </nav>
)

export default MainMenu