import React,{useState,useEffect} from 'react';
import { auth, db } from '../../firebase';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Message from '../Message/Message';
import SendMessage from '../SendMessage/SendMessage';
import Signout from '../Signout/Signout';

function Chat() {

    const [messages,setMessages]=useState([]);

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div>
                {messages.map(({ id, text,photoURL,uid}) => (
                    <Message key={id} text={text} photoURL={photoURL} uid={uid}/>
                ))}

                <SendMessage/>
                <Header/>
                <Menu/>
        </div>
    )
}

export default Chat
