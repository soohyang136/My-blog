import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/BoardList.module.css";

export default function BoardList(){
const [boardlist, setBoardlist] = useState([]);
  useEffect(() => {
    async function getBaord(){
      const response = await axios.get("http://127.0.0.1:8000/board/getBoard/")
      setBoardlist(response.data)
    };
    getBaord();
  }, []);
  const list = boardlist.map((data) => (
    <ul className={styles.list}>
      <li className={styles.num}>{data.id}</li>
      <li className={styles.title}>{data.title}</li>
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