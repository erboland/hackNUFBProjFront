import React from 'react';
import './signIn.css';
import {Link, useHistory} from 'react-router-dom';

function RoomEnter() {
  const history = useHistory();
  const handleClick = () =>{
    history.push('/chat');
  }

  return (
    <div className="container">
      <div className="signInContainer">
        <h2>Please, enter your room number</h2>
        <span role='img' className="emoji">🥺</span>
        <div className="inputRow">
          <input type="text" name="room"/>
        </div>
        <button className="loginButton" onClick={handleClick}>Enter</button>
        <Link className="noRegister" to="/">Go back</Link>
      </div>
    </div>
  )

}

export default RoomEnter
