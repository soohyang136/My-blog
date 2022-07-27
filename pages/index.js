import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import BoardList from '../components/BoardList';

export default function Home(props) {
  const [search, setSearch] = useState("");
  const [find, setFind] = useState("");
  function onFind(e){
    e.preventDefault();
    setFind(search);
  }
  return (
    <>
      <div className='board'>
        <div className='top'> 
        <Link href={props.token !== null ? "/register" : "/login"}>
          <button className='reg'>질문 등록하기</button>
        </Link>
          <form className='search-bar' >
            <input type={'text'} className="search" value={search} onChange={(e) => {setSearch(e.target.value)}} />
            <input type={'submit'} className="submit" value="검색" onClick={onFind} />
          </form>
      </div>
      <div className='bar'>
        <ul>
          <li className='num'>번호</li>
          <li className='title'>제목</li>
          <li className='author'>글쓴이</li>
          <li className='create'>작성일시</li>
        </ul>
      </div>
      <div className='mainBoard'>
        <BoardList find={find} />
      </div>
    </div>
    <style jsx>{`
      .board{
        padding: 30px 115px;
      }
      .reg{
        background-color: #13a78e;
        width: 10%;
        height: 38px;
        border: 1.5px solid #13a78e;
        border-radius: 5px;
        font-size: 100%;
        color: white;
        text-align: center;
      }
      .top{
        display: flex;
        justify-content: space-between;
      }
      input{
        height: 38px;
      }
      .search-bar{
        width: 40%;
        display: flex;
        justify-content: flex-end;
      }
      .search{
        width: 80%;
        border-radius: 5px;
        border: 0.5px solid gray;
        padding-left: 10px;
        font-size: 15px;
      }
      .submit{
        width: 12%;
        background-color: #f8f9fa;
        border: 1px solid gray;
        border-radius: 5px;
      }
      .bar{
        margin-top: 30px;
        background-color: #212529;
        height: 40px;
        display: flex;
        align-items: center;
      }
      .num{
        width: 40px;  
      }
      .title{
        width: 40px;
        margin-left: 40px;
      }
      .author{
        width: 50px;
        margin-left: 665px;
      }
      .create{
        margin-left: 170px;
      }
      li{
        color: white;
        list-style-type: none;
        font-width: bold;
        font-size: 17px;
      }
      ul{
        padding-left: 20px;
        display: flex;
        justify-content: flex-start;
      }
    `}</style>
    </>
  )
}
