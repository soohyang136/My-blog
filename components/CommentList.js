import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/CommentList.module.css";

export default function CommentList(props){
    const [comments, setComments] = useState([]);
    const router = useRouter();
    const page_id = router.query.id;
    useEffect(() => {
        async function getComments(){
            const an_res = await axios.get("http://127.0.0.1:8000/board/getComments/", {params: {'id': page_id}});
            for(let i = 0; i < an_res.data.length; i++){
                an_res.data[i]['content'] = an_res.data[i]['content'].replace(/\n/g, '<br/>');
            }
            setComments(an_res.data);
            console.log(comments);
        }
        getComments();
        console.log(props.user+"user");
    }, [page_id] );
    async function deleteComment(id){
        const yes = confirm("정말로 삭제하시겠습니까?");
        if(yes){
            const form = {"id": id}
            const response = await axios.post("http://127.0.0.1:8000/board/deleteComment/", form);
            alert(response.data);
            window.location.replace(`/post?id=${page_id}`)
        }
    }
    const list = comments.slice(0).reverse().map((data, index) => (
        <div className={styles.list}>
          <div className={styles.content} dangerouslySetInnerHTML={{__html:data.content}}></div>
          <div className={styles.sub}>
            {props.user['username'] === data.author ?
            <>
            <button onClick={(e)=>{deleteComment(data.id)}}>delete</button>
            <button onClick={(e)=>{router.push(`/modify_comment?id=${data.id}`)}}>modify</button>
            </>
            :
            <div></div>
            }
            <div>{data.author}</div>
            <div>{data.created_at}</div>
          </div>
        </div>
    ));
    return(
        <div className={styles.comment}>
          <div className={styles.commentNum}>{comments.length}개의 댓글이 있습니다.</div>
          {list}
        </div>
    )
}