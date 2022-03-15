import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { useState } from 'react';

export default function Home() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(){

  }

  return (
    <div className="container">
      <div className="login-form-area">

        
        <Image 
          src={logo} 
          alt="To-Do List Image"
          className="logo-img"
          height={200}
          width={200}
        />
      

        <form onSubmit={handleLogin}>

          <label>User</label>
          <input type="text" placeholder="user@user.com"></input>

          <label>Password</label>
          <input type="password" placeholder="******"></input>

          <div className="btn-area">
            <button type="submit">LOGIN</button>
          </div>

        </form>

        <Link href="/Signin">CREATE AN ACCOUNT</Link>
      </div>
    </div>
  )
}
