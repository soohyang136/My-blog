import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar(props){
    return(
        <>
        <nav>
            <Link href="/">
                <a className="logo">My-blog</a>
            </Link>
            {props.token === null ?
            <>
            <Link href="/join">
                <a>회원가입</a>
            </Link>
            <Link href="/login">
                <a>로그인</a>
            </Link>
            </>
            :
            <>
            <div className="logged">로그인됨</div>
            <div className="logout">로그아웃</div>
            </>
            }
        </nav>
        <style jsx>{`
            nav{
                height: 57px;
                background-color: #e9ecef;
                display: flex;
                align-items: center;
                border-bottom: 0.5px solid gray;
            }
            a{
                margin-left: 20px;
                color: gray;
            }
            .logo{
                color: #13a78e;
                font-weight: bold;
                font-size: 20px;
                margin-bottom: 5px;
            }
            .logged, .logout{
                margin-left: 20px;
                color: gray;
            }   
        `}</style>
        </>
    )
}