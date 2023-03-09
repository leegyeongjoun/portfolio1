import React from 'react';
// import { Link } from 'react-router-dom';
import './style/Porject.scss'
const Project = () => {
    return (
        <div id='project'>
            <header className="project_h">
                <h1><img src="./images/logo.svg" alt="로고" /></h1>
            </header>
            <main className="project_m">
                <div className="pro_list">
                    <h2><span>PROJECT</span></h2>
                    <a className='pro_item project1'>
                       <h3> 01. <span className='kr_font'> 한국콘텐츠진흥원 </span></h3>
                        <p> # HTML <br /> # CSS <br /> # Jquery <br /> # 반응형 </p>
                        <img src="./images/project-graphics1.svg" alt="이미지1" />
                        <img className='detail_photo' src="./images/con_color.png" alt="이미지2" />
                    </a>
                    <a className='pro_item project2'>
                        <h3>02. <span className='kr_font'> MEGABOX </span></h3>
                        <p> # HTML <br /> # CSS <br /> # JavaScript <br /> # 반응형</p>
                        <img src="./images/project-graphics2.svg" alt="이미지1" />
                        <img className='detail_photo' src="./images/megabox_color.png" alt="이미지2" />
                    </a>
                    <a className='pro_item project3'>
                        <h3>03. <span className='kr_font'> 숨고 </span></h3>
                        <p> # HTML <br /> # CSS <br /> # Jquery <br /> # 반응형 </p> 
                        <img src="./images/project-graphics3.svg" alt="이미지1" />
                        <img className='detail_photo' src="./images/soomgo_color.png" alt="이미지2" />
                    </a>
                    <a className='pro_item project4'>
                        <h3>04. <span className='kr_font'> TO DO LIST </span></h3>
                        <p> # HTML <br /> # CSS <br /> # Javascript <br /> #Vue </p>
                        <img src="./images/project-graphics4.svg" alt="이미지1" />
                        <img className='detail_photo' src="./images/megabox_color.png" alt="이미지2" />
                    </a>
                    <a className='pro_item project5'>
                        <h3>05. <span className='kr_font'> COIN TRACKER </span></h3>
                        <p> # HTML <br /> # CSS <br /> # Jquery <br /> # React </p>
                        <img src="./images/project-graphics5.svg" alt="이미지1" />
                        <img className='detail_photo' src="./images/megabox_color.png" alt="이미지2" />
                    </a>
                    <a className='pro_item project6'>
                        <h3>06. <span className='kr_font'> TRELLO </span></h3>
                        <p> # HTML <br /> # CSS <br /> # Jquery </p>
                        <img src="./images/project-graphics6.svg" alt="이미지1" />
                        <img className='detail_photo' src="./images/megabox_color.png" alt="이미지2" />
                    </a>
                    <a className='pro_item project7'>
                        <h3>07. <span className='kr_font'> NETFLIX </span></h3>
                        <p> # HTML <br /> # CSS <br /> # Jquery </p>
                        <img src="./images/project-graphics7.svg" alt="이미지1" />
                        <img className='detail_photo' src="./images/megabox_color.png" alt="이미지2" />
                    </a>

                </div>
            </main>
        </div>
    );
};

export default Project;