import React, {useState} from 'react';
import './signIn.css';
import {Link, useHistory} from 'react-router-dom';


function SignIn() {
  const history = useHistory();
  const [user, setUser] = useState ({email: "", password:"", rememberMe: false})

  const handleClick = () =>{
//    history.push('/room');
    fetch('http://62.171.186.222:9090/api/auth/login', {
      method: "POST",
      body: JSON.stringify(user),
      headers: {"Content-type": "application/json;charset=UTF-8"},
    }).then(res=> res.json())
    .then(resData => {
      console.log(resData)
    })
  }

  const changeUser = (type, value) =>{

    if (type === "password") {
      setUser({...user, password: value});
    } else {
      setUser({...user, email: value});
    }
  }

  return (
    <div className="container">
      <div className="signInContainer">
        <h1>Hello!</h1>
        <div className="inputRow">
          <label for="id">
            Your Email:
          </label>
          <input type="text" name="id" value={user.email} onChange={(e)=>changeUser("email", e.target.value)}/>
        </div>
        <div className="inputRow">
          <label for="password">
            Your Password?
          </label>
          <input name="password" type="password" value={user.password} onChange={(e)=>changeUser("password", e.target.value)}/>
        </div>
        <button className="loginButton" onClick={handleClick}>Enter</button>
        <Link className="noRegister" to="/registration">Have not already registered?</Link>
      </div>
      <div className="curl" onClick={()=>history.push('/rooms')}>
        <div>Rooms?</div>
      </div>
    </div>
  )

}

export default SignIn
