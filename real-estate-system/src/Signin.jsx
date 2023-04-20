// import { signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react";
// import { auth } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


const Signin = ()=>{
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('')

    const signin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{})

    }
    return(
        <div className="Sign-in-Container"> 
        <form> 
            <h1>Log In</h1>
            <input type="email"placeholder="Enter Email" value={email} 
            onChange={(e) =>setEmail(e.target.value)}
            ></input>

            <input type="password"placeholder="Enter password" value={password} 
            onChange={(e) =>setPassword(e.target.value)}
            ></input>
            <button type="submit"> Log In</button>
        </form> 
        </div>
    )
}
export default Signin