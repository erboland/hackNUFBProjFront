import React from 'react';
import './signIn.css';
import {Link, useHistory} from 'react-router-dom';

function Registration() {
  const history = useHistory();
  const handleSubmit = () =>{
    history.push('/room');
  }

  return (
    <div className="container">
      <div className="signInContainer">
        <h1>Registration</h1>
        <div className="inputRow">
          <label for="id">
            Your Full Name:
          </label>
          <input type="text" name="name"/>
        </div>
        <div className="inputRow">
          <label for="password">
            Your Password?
          </label>
          <input name="password" type="password"/>
        </div>
        <div className="inputRow">
          <label for="email">
            Your Email:
          </label>
          <input name="email" type="email"/>
        </div>
        <button className="loginButton" onClick={handleSubmit}>Submit</button>
        <Link className="noRegister" to="/">Go back</Link>
      </div>
    </div>
  )

}

export default Registration
