export default function Login(){
    return (
        <>
        <div className="login">
            <input className="id" type={'text'} placeholder="사용자명을 입력하세요...(id)" />
            <input className="email" type={'email'} placeholder="이메일을 입력하세요..." />
            <input className="pw" type={'password'} placeholder="비밀번호를 입력하세요..." />
            <input className="chpw" type={'password'} placeholder="같은 비밀번호를 입력하세요..." />
            <input className="submit" type={'submit'} value="회원가입" />
        </div>
        <style jsx>{`
            .login{
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
            }
        `}</style>
        </>
    )
}