import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/CommentList.module.css";

export default function CommentList(){
    const [comments, setComments] = useState([]);
    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
        async function getComments(){
            const an_res = await axios.get("http://127.0.0.1:8000/board/getComments/", {params: {'id': id}});
            for(let i = 0; i < an_res.data.length; i++){
                an_res.data[i]['content'] = an_res.data[i]['content'].replace(/\n/g, '<br/>');
            }
            setComments(an_res.data);
            console.log(comments);
        }
        getComments();
    }, [id]);
    const list = comments.slice(0).reverse().map((data, index) => (
        <div className={styles.list}>
          <div className={styles.content} dangerouslySetInnerHTML={{__html:data.content}}></div>
          <div className={styles.sub}>
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