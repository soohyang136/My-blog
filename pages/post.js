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
            setBoard(response.data);
            console.log(board);
        }
        getBoard();
    }, [id]);
    return(
        <>
            <div className="board">
                <div className="title">
                {board.title}    
                </div>
                <div className="content">
                    <div className="in_content">
                    {board.content}
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
                    font-size: 70px;
                    border-bottom: 1px solid gray;
                }
                .content{
                    margin-top: 50px;
                    border: 1px solid gray;
                    border-radius: 5px;
                    height: 200px;
                }
                .in_content{
                    padding-top: 20px;
                    padding-left: 10px
                }
                .sub{
                    display: flex;
                    flex-direction: column;
                    padding-left: 1000px;
                    padding-top: 100px;
                }
            `}</style>
        </>
    )
}