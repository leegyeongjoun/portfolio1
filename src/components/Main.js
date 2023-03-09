import React, { useRef } from 'react';
import './style/Main.scss'
const Main = () => {
    const titleRef=useRef();
    const handleMouseMove = (rotate) => {
        let x = (window.innerWidth / 2 - rotate.clientX) / 15;
        let y = (window.innerHeight / 2 - rotate.clientY) / 5;
        
        //움직이는 방향 값
        //Ref를 쓰면 current값
        titleRef.current.style.transform = "rotateY(" + -x + "deg) rotateX("+y+"deg)"
    }
    const handleMouseOut = (rotate) => {
        titleRef.current.style.transform = "rotate(0)"
    }
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
                <div className="container" onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
                    <p className='title' ref={titleRef}>
                        HELLO, I'M A <br />
                        FRONT-END DEVELOPER <span>GyeongJoun</span>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Main;