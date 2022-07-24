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
      
    </>
  )
}

export default MyApp
