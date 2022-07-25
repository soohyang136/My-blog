import axios from "axios";
import { useState } from "react"

export default function Register(props){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    async function onRegister(e){
        e.preventDefault();
        console.log(props.user);
        const form = {'title': title, 'content': content, 'author': props.user['id']};
        const response = axios.post("http://127.0.0.1:8000/board/registerBoard/", form);
        window.location.replace("/");
    }
    return(
        <>
        <form onSubmit={onRegister} className="regform">
            <input className="title" type={"text"} placeholder="제목을 입력하세요." value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <textarea className="content" type={"text"} placeholder="내용을 입력하세요." value={content} onChange={(e) => {setContent(e.target.value)}} />
            <input className="reg" type={"submit"} value="등록" />
        </form>
        <style jsx>{`
            .regform{
                display: flex;
                flex-direction: column;
                padding: 50px 150px;
            }
            .title{
                height: 40px;
                border-radius: 5px;
                border: 1px solid gray;
            }
            .content{
                margin-top: 20px;
                height: 400px;
                padding-top: 10px;
                border-radius: 5px;
                border: 1px solid gray;
            }
            .reg{
                margin-top: 20px;
                width: 100px;
                height: 40px;
                background-color: #13a78e;
                border-radius: 5px;
                border: 1px solid gray;
            }

        `}</style>
        </>
    )
}