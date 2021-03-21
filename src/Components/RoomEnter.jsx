import React, {useState} from 'react';
import './signIn.css';
import {Link, useHistory} from 'react-router-dom';

function RoomEnter() {
  const history = useHistory();

  const [room, setRoom] = useState("");

  const handleClick = () =>{
//    fetch(`http://62.171.186.222:9090/api/room/join?roomId=${room}`, {
//      method: "GET",
//      headers: {"Content-type": "application/json;charset=UTF-8", Authorization:`Bearer ${sessionStorage.token}`},
//    }).then(res=>res.json())
//    .then(resData=>{
//      console.log(resData);
//    })
    history.push('/chat')
  }

  return (
    <div className="container">
      <div className="signInContainer">
        <h2>Please, enter your room number</h2>
        <span role='img' className="emoji">🥺</span>
        <div className="inputRow">
          <input type="text" name="room" value={room} onChange={(e)=>setRoom(e.target.value)}/>
        </div>
        <button className="loginButton" onClick={handleClick}>Enter</button>
        <Link className="noRegister" to="/">Go back</Link>
      </div>
    </div>
  )

}

export default RoomEnter
