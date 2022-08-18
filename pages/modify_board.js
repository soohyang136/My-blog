import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Modify_board(props){
    const [board, setBoard] = useState({});
    const [content, setContent] = useState("");
    const router = useRouter();
    const commentId = router.query.id;
    useEffect(() => {
        async function getComment(){
            const response = await axios.get("http://127.0.0.1:8000/board/getBoard/", {params : {'id': commentId}});
            setBoard(response.data);
            setContent(response.data['content']);
        }
        getComment();
    }, [commentId]);
    async function modify(){
        if(content){
            const form = {"id": commentId, "content": content};
            const response = await axios.post("http://127.0.0.1:8000/board/modifyBoard/", form);
            router.back();
        }
        else{
            alert("내용이 없습니다.");
        }
    }
    return(
        <>
            <div className="modify_form">
                <textarea value={board} type={'text'} onChange={(e)=>{setContent(e.target.value)}}/>
                <button type="submit" onClick={modify}>저장</button>
            </div>
            <style jsx>{`
                .modify_form{
                    display: flex;
                    flex-direction: column;

                }
                textarea {
                    width: 80%;
                    height: 200px;
                    margin-left: 10%;
                    margin-top: 50px;
                    padding-left: 5px;
                    padding-top: 5px;
                    border: 0.5px solid gray;
                    border-radius: 4px;
                }
                button{
                    width: 6%;
                    height: 40px;
                    margin-left: 10%;
                    margin-top: 10px;
                    background-color: #13a78e;
                    border: 1px solid #13a78e;
                    border-radius: 4px;
                }
            `}</style>
        </>
    )
}