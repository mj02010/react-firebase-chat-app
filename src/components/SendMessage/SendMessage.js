import React,{useState} from 'react';
import firebase from 'firebase';
import {db,auth} from '../../firebase';
import './SendMessage.css';
import '../../iconfonts/material-icons.css';

function SendMessage() {

    const [msg,setMsg]=useState("");

    async function sendMessage(e){
        e.preventDefault();

        if(msg==""){
            alert("No message to send")
        }else{

        const {uid,photoURL}=auth.currentUser;

        await db.collection("messages").add({
            text:msg,
            photoURL,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        });
        setMsg("");
    }
}

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="SendMessage">
                <form onSubmit={sendMessage}>
                    <input value={msg} onChange={e=>{setMsg(e.target.value)}} placeholder="Message.." className="text-input"/>
                    <button type="submit" className="send-button"><i className="material-icons">send</i></button>
                </form>
            </div>
        </div>
    )
}

export default SendMessage