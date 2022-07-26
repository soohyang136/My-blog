import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function Post(){
    const [board, setBoard] = useState({});
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
        board.content
    }, [id]);
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
                        <div className="author">
                        {board.author}
                        </div>
                        <div className="create">
                        {board.created_at}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
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
                    padding-left: 1000px;
                    padding-bottom: 20px;
                }
            `}</style>
        </>
    )
}