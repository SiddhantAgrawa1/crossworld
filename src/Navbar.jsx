import React from "react";
import { Link } from "react-router-dom";
import './component/css/navbar.css'

const Navbar = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><button><Link to='/crossworld/marathi'>Marathi</Link></button></li>
                    <li><button><Link to='/crossworld/english'>English</Link></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;