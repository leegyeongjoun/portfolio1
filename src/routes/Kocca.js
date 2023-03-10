import React from 'react';
import Header from '../components/Header';
import './style/Kocca.scss'

const Kocca = () => {
    return (
        <div>
            <Header/>
            <section id="kocca">
                <div className="color_box">
                <div className="text">
                    <h2>한국콘텐츠진흥원</h2>
                    <p>HTML, CSS, JQuery를 이용하여 웹표준, 웹접근성을 고려하여 제작한 관공서 클론 코딩</p>
                    <div className="skills">
                        <img src="./images/html.png" alt="html" className="skill_logo" />
                        <img src="./images/css.png" alt="css" className="skill_logo" />
                        <img src="./images/jquery.png" alt="jquery" className="skill_logo" />
                    </div>
                    <div className="link">
                        <a href="https://github.com/leegyeongjoun" target="_blank"><img src="./images/github.png" alt="skill_logo" /></a>
                    </div>
                </div>
                </div>
                <div className="flow_img">
                <a href="https://m1n720n9.github.io/kocca/" target="_blank"><img src="./images/image1.png" alt="" /></a>
            </div>
            </section>
        </div>
    );
};

export default Kocca;