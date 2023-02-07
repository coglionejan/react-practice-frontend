import React from "react";
import './CreatePost.css'
import { CKEditor } from "ckeditor4-react";

function CreatePost(){
    return(
        <div className="CreatePost">
            <h4 className="create-title">글쓰기</h4>
            <div className="postComponent">
                <textarea className="postTitle" placeholder="제목"></textarea>
                <CKEditor className="postContent"></CKEditor>
            </div>
            <button className="postSave">저장</button>
        </div>
    );
}

export default CreatePost;