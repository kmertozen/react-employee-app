import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <nav className='navbar navbar-light justify-content-center'>
            <Link to="/" className='navbar-brand'><h1>Ayın Elemanı Uygulaması</h1></Link>
        </nav>
    )
}

export default Header