import React from "react";
import './Post.css'

function Post({id, date, title, content}){
    return(
        <div className="post">
            <div className="post-info">
                <p className="date">{date}</p>
                <h1 className="title">{title}</h1>
                <p className="contentDescription">{content}</p>
            </div>
        </div>
    );
}

export default Post;