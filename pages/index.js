import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import firebase from '../services/firebaseConnection';
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function storageUser(data){

    localStorage.setItem('to-do-list-users', JSON.stringify(data));

  }

  async function signIn(user, password){

    setLoading(true);
    await firebase.auth().signInWithEmailAndPassword(user, password)
    .then( async (value) => {
      
      let uid = value.user.uid;

      const userProfile = await firebase.firestore().collection('users')
      .doc(uid).get();

      let data = {
        uid: uid,
        name: userProfile.data().name,
        avatarURL: userProfile.data().avatarURL,
        user: userProfile.data().user
      }

      storageUser(data);
      setLoading(false);
      router.push("/Dashboard");

    })
    .catch((err) => {
      console.log('error: ' + err);
      toast.error('Error during sign in');
      setLoading(false);
    })

  }

  function handleLogin(e){

    e.preventDefault();

    signIn(user, password);

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
          <input type="text" placeholder="user@user.com" onChange={ (e) => {setUser(e.target.value)} }></input>

          <label>Password</label>
          <input type="password" placeholder="******" onChange={ (e) => {setPassword(e.target.value)} }></input>

          <div className="btn-area">
            <button type="submit">SIGN IN</button>
          </div>

        </form>

        <Link href="/Signup">CREATE AN ACCOUNT</Link>
      </div>

      { loading &&
          <div>
              <h2>Loading...</h2>
          </div> 
      }

      <ToastContainer autoClose={3000}/>
    </div>
  )
}
