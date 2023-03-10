import React from 'react';
import './style/Profile.scss'
const Profile = () => {
    return (
        <div id='profile'>
            
            <section className="profile_c">
                <h2><span>ABOUT ME</span></h2>
                <div className="flex">
                    <div className="flex">
                        <section className="pic">
                            <img src="./images/profile_pic.jpg" alt="이미지" />
                        </section>
                    </div>
                    <div className="information">
                        <section className="text">
                            <p>name : 이경준</p>
                            <p>birth : 1997.10.08</p>
                            <p>education : 경기과학기술대학교 전자통신과</p>
                            <p className="intro">
                                하루하루 발전하는 프론트 엔드 개발자 입니다.
                                하루하루 발전하는 프론트 엔드 개발자 입니다.
                                하루하루 발전하는 프론트 엔드 개발자 입니다.
                                하루하루 발전하는 프론트 엔드 개발자 입니다.
                            </p>
                        </section>
                        <section className="skills">
                            <h3>My skills</h3>
                            <div className="skill">
                                <span>html</span>
                                <span>scss</span>
                                <span>Jquery</span>
                                <span>Javascript</span>
                                <span>React</span>
                                <span>Vue</span>   
                                <span>C</span>   
                            </div>
                        </section>
                        <section className="skills">
                            <h3>My Tools</h3>
                            <div className="skill">
                                <span>git</span>
                                <span>axios</span>
                                <span>api</span>
                                <span>figma</span>
                                <span>zeplin</span>
                                <span>postman</span>
                                <span>firebase</span>     
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;