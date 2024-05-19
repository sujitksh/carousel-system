import { useState,useEffect } from 'react'
import Cookies from "js-cookie";
import Login from './components/login/Login';
import Carousel from './components/carousel/index.jsx';
import { credential } from './Auth';

function App() {
  const [cookie, setCookie] = useState(Cookies.get("user") || "");
  const handleSubmit = (user)=>{
    if(credential[0].email === user.email && credential[0].password === user.password){
      Cookies.set("user",JSON.stringify(user));
      setCookie(JSON.parse(Cookies.get("user")))
    }
  }
 
  return (
    <div>
      {
         cookie ? <Carousel />:<Login onLogin = {handleSubmit} />
      }
    </div>
  )
}

export default App
