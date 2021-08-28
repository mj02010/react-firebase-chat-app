import React from 'react';
import {auth} from '../../firebase';
import '../../App.css';
import './Message.css';

function Message(props) {


    return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div key={props.id}>
            <img src={props.photoURL} className={`profile ${props.uid===auth.currentUser.uid ? 'sent-profile' : 'recived-profile'}`}/>
            <button className={`Message ${props.uid===auth.currentUser.uid ? 'sent-text' : 'recived-text'}`}>{props.text}</button>
        </div>
    </div>
    )
}

export default Message
