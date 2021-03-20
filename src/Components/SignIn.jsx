import React from 'react';
import './signIn.css';
import {Link, useHistory} from 'react-router-dom';

function SignIn() {
  const history = useHistory();

  const handleClick = () =>{
    history.push('/room');
  }

  return (
    <div className="container">
      <div className="signInContainer">
        <h1>Hello!</h1>
        <div className="inputRow">
          <label for="id">
            Your ID:
          </label>
          <input type="text" name="id"/>
        </div>
        <div className="inputRow">
          <label for="password">
            Your Password?
          </label>
          <input name="password" type="password"/>
        </div>
        <button className="loginButton" onClick={handleClick}>Enter</button>
        <Link className="noRegister" to="/registration">Have not already registered?</Link>
      </div>
      <div className="curl">
        <div onClick={()=>history.push('/rooms')}>Rooms?</div>
      </div>
    </div>
  )

}

export default SignIn
