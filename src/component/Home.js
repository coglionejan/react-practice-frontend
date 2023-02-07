import React from "react";
import './Home.css'

function Home(){
    return(
        <div className="home">
            <h1 className="notification-title">공지사항</h1>
            <div className="notification">
                <div className="notification-list">
                    <p className="notification-content">NUS 한인회에 오신 여러분을 환영합니다!</p>
                </div>
                <div className="notification-insta">
                    
                </div>
            </div>
            <h2 className="activities-title">Our Activities</h2>
            <div className="activities">
                <div className="activity-list">
                    <img src="https://nuskusa-storage.s3.ap-southeast-1.amazonaws.com/source/home1.png" className="image"></img>
                    <ul>
                        <li>교류활동</li>
                    </ul>
                    <p className="desc">신입생 환영회, 문화교류, 캠퍼스 투어</p>
                </div>
                <div className="activity-list">
                    <img src="https://nuskusa-storage.s3.ap-southeast-1.amazonaws.com/source/home2.png" className="image"></img>
                    <ul>
                        <li>이벤트</li>
                    </ul>
                    <p className="desc">여러가지 이벤트!</p>
                </div>
                <div className="activity-list">
                    <img src="https://nuskusa-storage.s3.ap-southeast-1.amazonaws.com/source/home3.png" className="image"></img>
                    <ul>
                        <li>취업활동 정보</li>
                    </ul>
                    <p className="desc">인턴, 취업 관련 웨비나, 멘토 초청 강연</p>
                </div>
            </div>
            <h3 className="contactUs-title">Contact Us</h3>
            <div className="contactUs">
                <div className="contactUs-list">
                    <b>Email</b>
                    <p>nuskusa@gmail.com</p>
                </div>
                <div className="contactUs-list">
                    <b>Address</b>
                    <p>21 Lower Kent Ridge Rd Singapore 119077</p>
                </div>
            </div>
        </div>
    );
}

export default Home;