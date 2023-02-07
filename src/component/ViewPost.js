import React from "react";
import './ViewPost.css'
import { Link } from "react-router-dom";
import Post from "./Post"

function ViewPost(props){
    return(
        <div className="viewpost">
            <h1 className="board-title">게시판</h1>
            <b className="board-desc">NUS 한인회 게시판에 오신 것을 환영합니다. 저희 게시판은 여러 게시글들을 통해 NUS 학생들, 
            그리고 NUS에 관심있는 사람들과 서로 소통하고 정보 공유를 위해 만들어진 페이지입니다.</b>
            <div className="view">
                <p className="date">{props.date}</p>
                <h1 className="title">{props.title}</h1>
                <p className="contentDescription">{props.content}</p>
            </div>
            <h1 className="posts">게시글 보기</h1>
            <div className="board-list">
                <Link to="/board_1">
                    <Post id="1" date="2022-03-28" title="Title1" content="content1"></Post>
                </Link>
                <Link to="/board_2">
                    <Post id="2" date="2021-11-06" title="Title2" content="content2"></Post>
                </Link>
            </div>
        </div>
    );
}

export default ViewPost;