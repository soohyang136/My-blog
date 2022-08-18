import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import CommentList from "../components/CommentList";

export default function Post(props){
    const [board, setBoard] = useState({});
    const [an_Content, setAn_Content] = useState("");
    const router = useRouter();
    const id = router.query.id;
    console.log(id)
    console.log("post")
    useEffect(() => {
        async function getBoard(){
            const response = await axios.get("http://127.0.0.1:8000/board/getBoard/", {params : {'id': id}});
            response.data['content'] = response.data['content'].replace(/\n/g, '<br/>');
            console.log(response.data['content'])
            console.log(response.data);
            setBoard(response.data);
            console.log(board);
        }
        getBoard();
    }, [id]);

    async function onComment(e){
        e.preventDefault();
        const form = {'author': props.user['id'], 'content': an_Content, 'board': id}
        const res = await axios.post("http://127.0.0.1:8000/board/registerComment/", form);
        setAn_Content("");
        window.location.replace(`/post?id=${id}`)
    }

    async function deleteBoard(){
        const yes = confirm("정말로 삭제하시겠습니까?");
        if(yes){
            const form = {'id': board.id}
            const deres = await axios.post("http://127.0.0.1:8000/board/deleteBoard/", form);
            window.location.replace('/');
        }
    }

    return(
        <>
            <div className="board">
                <div className="title">
                {board.title}    
                </div>
                <div className="content">
                    <div className="in_content" dangerouslySetInnerHTML={{__html:board.content}}>
                    </div>
                    <div className="sub">
                        {props.user['username'] === board.author ?
                        <div className="btn">
                        <button onClick={deleteBoard} className="del_bt">삭제</button>
                        <button onClick={(e)=>{router.push(`/modify_board?id=${id}`)}} className="mod_bt">수정</button>
                        </div>
                        :
                        <div></div>
                        }
                        <div className="author">
                        {board.author}
                        </div>
                        <div className="create">
                        {board.created_at}
                        </div>
                    </div>
                </div>
            </div>
            <CommentList user={props.user} />
            <form className="reg_comment" onSubmit={onComment}>
                <label className="comment_label"><div className="label_title">댓글</div>
                    <textarea type={'text'} value={an_Content} onChange={(e) => {setAn_Content(e.target.value)}} className="an_content" />
                    <input type={'submit'} value="등록" className="comment_button" /> 
                </label>
            </form>
            <style jsx>{`
                .btn{
                    display: flex;

                }
                .del_bt{
                    width: 40%;
                    background-color: transparent;
                    border: 1px solid gray;
                    margin-right: 10%; 
                    cursor: pointer; 
                }
                .mod_bt{
                    width: 40%;
                    background-color: transparent;
                    border: 1px solid gray;
                    cursor: pointer;
                }
                .reg_comment{
                    padding: 15px 115px;
                }
                .an_content{
                    margin-top: 10px;
                    height: 100px;
                    padding-top: 10px;
                    padding-left: 10px;
                }
                .comment_button{
                    margin-top: 10px;
                    width: 60px;
                    height: 30px;
                    border-radius: 5px;
                    background-color: #13a78e;
                    border: 1.5px solid #13a78e;
                }
                .comment_label{
                    display: flex;
                    flex-direction: column;
                    font-size: 30px;
                }
                .label_title{
                    border-bottom: 1px solid gray;
                    height: 50px;
                }                
                .board{
                    padding: 30px 115px;
                }
                .title{
                    font-size: 60px;
                    border-bottom: 1px solid gray;
                }
                .content{
                    position: relative;
                    margin-top: 50px;
                    border: 1px solid gray;
                    border-radius: 5px;
                    min-height: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .in_content{
                    padding-top: 10px;
                    padding-left: 10px
                }
                .sub{
                    display: flex;
                    flex-direction: column;
                    margin-left: 1000px;
                    margin-top: 30px;
                }
            `}</style>
        </>
    )
}