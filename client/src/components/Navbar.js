import React from 'react'
import { Link } from "react-router-dom"
import "../scss/components/_navbar.scss"

function Navbar() {
    return (
        <nav>
            <div className='nav-container'>
                <div className='nav_row'>
                <div className='nav_left'>
                    <Link to="/">
                        <span>Medium...</span>
                    </Link>
                </div>
                <div className='nav_right'>
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                    <Link to="/register">
                        <span>Register</span>
                    </Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;