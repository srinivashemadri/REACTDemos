import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =(props)=>{

    return(
        <nav className="nav-wrapper red darken-1">
            <div className="container">
                <Link to="/" className="brand-logo">Poke'Times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </div>

        </nav>

    )
}
export default Navbar