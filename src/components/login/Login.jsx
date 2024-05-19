import React, { useState } from 'react'
import styles from "./Login.module.css"

function Login({onLogin}) {
  const [user,setUser] = useState({
     email:"",
     password:""
  })
 const {email,password} = user;
 
 const handleInput = (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
      
 }
  const handleSubmit = (e)=>{
      e.preventDefault();
      onLogin(user);
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}><span>Login Form</span></div>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <i className="fas fa-user"></i>
            <input type="text"  name="email" onChange={handleInput} placeholder="Email or Phone" required />
          </div>
          <div className={styles.row}>
            <i className="fas fa-lock"></i>
            <input type="password"  name="password" onChange={handleInput} placeholder="Password" required />
          </div>

          <div className={`${styles.row} ${styles.button}`}>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login