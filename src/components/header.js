import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.scss'
const Header = (props) => {
    return (
        <header className="header">
                <Link to='/'><h1><img src="./images/logo.svg" alt="logo" /></h1></Link >
                <nav>
                    <ul>
                        <Link to='/Home'><li><a href="!#">Home</a></li></Link>
                        <Link to='/Profile'><li><a href="!#">Profile</a></li></Link>
                        <Link to='/Project'><li><a href="!#">Project</a></li></Link>
                        <Link to='/Contact'><li><a href="!#">Contact</a></li></Link>
                    </ul>    
                </nav> 
            </header>            
    );
};

export default Header;