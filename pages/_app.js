import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({});
  useEffect(()=>{
    setToken(localStorage.getItem('token'));
    console.log(token);
    // if(token !== null){
    //   async function getUser() {
    //     console.log("enter");
    //     const response = await axios.get("http://127.0.0.1:8000/board/userview/", {params: {'token' : token}})
    //     setUser(response.data);
    //     console.log(user);
    //   }
    //   getUser();
    // }
  },[])

  useEffect(() => {
    async function getUser() {
      console.log("enter");
      const response = await axios.get("http://127.0.0.1:8000/board/userview/", {params: {'token' : token}})
      setUser(response.data);
      console.log(user);
    }
    getUser();
  }, [token]);

  return (
    <>  
      <NavBar token={token} user={user} />
      <Component {...pageProps} token={token} user={user} />
      <style jsx global>{`
        @font-face {
          font-family: 'DalseoHealingBold';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/DalseoHealingBold.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
        }
        *{
          font-family: 'DalseoHealingBold';
        }
      `}</style>
    </>
  )
}

export default MyApp
