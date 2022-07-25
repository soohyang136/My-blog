import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/BoardList.module.css";

export default function BoardList(){
const [boardlist, setBoardlist] = useState([]);
  useEffect(() => {
    async function getBaord(){
      const response = await axios.get("http://127.0.0.1:8000/board/getBoards/")
      setBoardlist(response.data)
    };
    getBaord();
  }, []);
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