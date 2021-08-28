import React from 'react';
import { auth } from '../../firebase';
import './Signout.css';


function Signout() {

    const signOut=()=>{
        auth.signOut();
    }

    return (
        <div>
            <button onClick={signOut} className="Signout">Sign-Out</button>
        </div>
    )
}

export default Signout
