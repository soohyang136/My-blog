import Link from "next/link";

export default function NavBar(){
    return(
        <>
        <nav>
            <Link href="/">
                <a className="logo">My-blog</a>
            </Link>
            <Link href="/join">
                <a>회원가입</a>
            </Link>
            <Link href="/login">
                <a>로그인</a>
            </Link>
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
                color: black;
                font-weight: bold;
                font-size: 20px;
                margin-bottom: 5px;
            }   
        `}</style>
        </>
    )
}