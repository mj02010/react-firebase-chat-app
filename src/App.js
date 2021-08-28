import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Signin from './components/Signin/Signin';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';


function App(){

  const [user]=useAuthState(auth);

  console.log(user)

  return (
    <div className="App">
      {user ? <Chat/> : <Signin/>}
    </div>
  );
}

export default App;
