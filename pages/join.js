import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login(){
    const router = useRouter();
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [chpw, setChpw] = useState("");

    async function onJoin(e){
        e.preventDefault();
        if(pw !== chpw){
            alert("비밀번호가 다릅니다.");
        }
        else{
            const form = {"username": id, 'email': email, 'password': pw};
            const response = await axios.post("http://127.0.0.1:8000/board/join/", form);
            alert(response.data['username'] + "님 회원가입 성공");
            window.location.replace("/");
        }
    }

    return (
        <>
        <form className="join" onSubmit={onJoin}>
            <input className="id" type={'text'} placeholder="사용자명을 입력하세요...(id)" value={id} onChange={(e) => {setId(e.target.value)}} />
            <input className="email" type={'email'} placeholder="이메일을 입력하세요..." value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <input className="pw" type={'password'} placeholder="비밀번호를 입력하세요..." value={pw}  onChange={(e) => {setPw(e.target.value)}} />
            <input className="chpw" type={'password'} placeholder="같은 비밀번호를 입력하세요..." value={chpw} onChange={(e) => {setChpw(e.target.value)}} />
            <input className="submit" type={'submit'} value="회원가입" />
        </form>
        <style jsx>{`
            .join{
                padding: 130px 550px;
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
                background-color: #13a78e;
            }
        `}</style>
        </>
    )
}