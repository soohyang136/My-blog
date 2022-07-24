import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import BoardList from '../components/BoardList';

export default function Home(props) {
  return (
    <>
      <div className='board'>
        <div className='top'> 
        <Link href={props.token !== null ? "/register" : "/login"}>
          <button className='reg'>질문 등록하기</button>
        </Link>
          <div className='search-bar'>
            <input type={'text'} className="search" />
            <input type={'submit'} className="submit" value="검색" />
          </div>
      </div>
      <div className='bar'>
        <ul>
          <li className='num'>번호</li>
          <li className='title'>제목</li>
          <li className='author'>글쓴이</li>
          <li className='creat'>작성일시</li>
        </ul>
      </div>
      <div className='mainBoard'>
        <BoardList />
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
      }
      .submit{
        width: 12%;
        background-color: #f8f9fa;
        border: 1px solid black;
        border-radius: 5px;
      }
      .bar{
        margin-top: 30px;
        background-color: #212529;
        height: 40px;
        display: flex;
        align-items: center;
      }
      .title{
        padding-left: 70px;
      }
      .author{
        padding-left: 700px;
      }
      .creat{
        padding-left: 150px;
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
