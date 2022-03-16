import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

export default function Signup() {

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loadingAuth, setLoadingAuth] = useState(false);

    async function signUp(name, email, password){

        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value) => {

            let uid = value.user.uid;

            await firebase.firestore().collection('users')
            .doc(uid).set({
                name: name,
                avatarURL: null,
            })
            .then(()=>{

                /*
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                    avatarURL: null
                }
                */

                //setUser(data);
                setLoadingAuth(false);
                console.log('Sign up done with success!');
                toast.success('Sign up done with success!');
            })
        })
        .catch((err)=>{
            console.log("error: " + err);
            toast.error('Error during sign up');
            setLoadingAuth(false);
        })

    }

    function handleSignin(e){

        e.preventDefault();

        if(!name || !user || !password){
            toast.warning('Fill in all fields!');
        }else{
            signUp(name, user, password);
        }

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
        

        <form onSubmit={handleSignin}>

            <label>Name</label>
            <input type="text" placeholder="Your name" onChange={(e) => {setName(e.target.value)}}></input>

            <label>User</label>
            <input type="text" placeholder="user@user.com" onChange={(e) => {setUser(e.target.value)}}></input>

            <label>Password</label>
            <input type="password" placeholder="******" onChange={(e) => {setPassword(e.target.value)}}></input>

            <div className="btn-area">
                <button type="submit">SIGN IN</button>
            </div>

        </form>

        <Link href="/">LOGIN</Link>

        </div>
        
        { loadingAuth &&
            <div>
                <h2>Loading...</h2>
            </div> 
        }
        

        <ToastContainer autoClose={3000}/>

    </div>
    )
}
