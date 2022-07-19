export default function Join(){
    return(
        <>
        <div className="join">
            <input className="id" type={'text'} placeholder="사용자명을 입력하세요..." />
            <input className="pw" type={'password'} placeholder="비밀번호를 입력하세요..." />
            <input className="submit" type={'submit'} value="로그인"/>
        </div>
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
            }
        `}</style>
        </>
    )
}