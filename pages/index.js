import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    
      <div className='board'>
        <div className='top'>
        <button className='reg'>질문 등록하기</button>
        <div className='search-bar'>
          <input type={'text'} className="search" />
          <input type={'submit'} className="submit" value="검색" />
        </div>
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
    `}</style>
    </>
  )
}
