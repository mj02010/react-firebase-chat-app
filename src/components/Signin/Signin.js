import React from 'react';
import firebase from 'firebase';
import {auth} from '../../firebase';
import './Signin.css';


function Signin() {

    const signInWithGoogle=()=>{
        const provider=new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <button onClick={signInWithGoogle} className="Signin">Sign in with Google</button>
        </div>
    )
}

export default Signin;
