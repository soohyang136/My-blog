import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(null)
  useEffect(()=>{
    setToken(localStorage.getItem('token'));
  },[])
  return (
    <>  
      <NavBar token={token}/>
      <Component {...pageProps} token={token} />
    </>
  )
}

export default MyApp
