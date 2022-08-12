import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/BoardList.module.css";

export default function BoardList(props){
    const [boardlist, setBoardlist] = useState([]);
    const [copyList, setCopyList] = useState([]);
    useEffect(() => {
        async function getBoard(){
            const response = await axios.get("http://127.0.0.1:8000/board/getBoards/")
            setBoardlist(response.data)
            setCopyList(response.data)
        };
        getBoard();
    }, []);
  useEffect(() => {
    console.log("find" + props.find)
    if(props.find !== ""){
        const findlist = [];
        for(let i = 0; i < copyList.length; i++){
            if(copyList[i].title.includes(props.find)){
                findlist.push(copyList[i]);
            }
        }
        setBoardlist(findlist);
    }
    else{
        setBoardlist(copyList);
    }
  }, [props.find]);
  const list = boardlist.slice(0).reverse().map((data, index) => (
    <ul className={styles.list}>
      <li className={styles.num}>{boardlist.length - index}</li>
      <Link href={`/post?id=${data.id}`}>
        <a className={styles.move}><li className={styles.title}>{data.title}</li></a>
      </Link>
      <li className={styles.author}>{data.author}</li>
      <li className={styles.created_at}>{data.created_at}</li>
    </ul>
));
    return(
        <>
        {list}
        </>
    )
}