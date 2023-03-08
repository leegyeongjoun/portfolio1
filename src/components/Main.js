import React from 'react';
import './style/Main.scss'
const Main = () => {
    return (
        <div id='main'>
            <header className="main_h">
                <h1><img src="./images/logo.svg" alt="logo" /></h1>
                <nav>
                    <ul>
                        <li><a href="!#">Home</a></li>
                        <li><a href="!#">Profile</a></li>
                        <li><a href="!#">Project</a></li>
                        <li><a href="!#">Contact</a></li>
                    </ul>    
                </nav> 
            </header>            
            <main className="main_m">

            </main>
        </div>
    );
};

export default Main;