import axios from "axios";
import { useState } from "react";

export default function Join(){
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    async function onLogin(e){
        e.preventDefault();
        const form = {'username': id, 'password': pw};
        const response = await axios.post("http://127.0.0.1:8000/board/login/", form);
        localStorage.setItem('token', response.data['token']);
        window.location.replace("/");
    }

    return(
        <>
        <form className="join" onSubmit={onLogin}>
            <input className="id" type={'text'} placeholder="사용자명을 입력하세요..." value={id} onChange={(e) => {setId(e.target.value)}} />
            <input className="pw" type={'password'} placeholder="비밀번호를 입력하세요..." value={pw} onChange={(e) => {setPw(e.target.value)}} />
            <input className="submit" type={'submit'} value="로그인"/>
        </form>
        <style jsx>{`
            .join{
                padding: 190px 550px;
                display: flex;
                flex-direction: column;
            }
            input{
                margin-bottom: 10px;
                height: 50px;
                width: 100%;
                border-radius: 10px;
                border: 1px solid gray;
                padding-left: 10px;
            }
            .submit{
                font-size: 20px;
                text-align: center;
                background-color: #13a78e;
            }
        `}</style>
        </>
    )
}