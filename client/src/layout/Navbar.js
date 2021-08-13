import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='navbar'>

            <Link className='large btn-link' to='/' >Home</Link>
            
            <Link className='large btn-link move-right' to='Contact' >Contact</Link>
            
            <Link className='large btn-link' to='/projects' >Projects</Link>

        </header>
    )
}

export default Navbar
