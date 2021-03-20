import React, {useState} from 'react';
import './signIn.css';
import {Link, useHistory} from 'react-router-dom';

function Registration() {
  const history = useHistory();

  const [user, setUser] = useState ({email: "", password:"", firstName:"", lastName:"", login: ""});

  const handleChange = (type, value) =>{
    setUser({...user, type: value});
  }

  const handleSubmit = () =>{
    console.log(user);
//    history.push('/room');
//    fetch('http://62.171.186.222:9090/api/auth/login', {
//      method: "POST",
//      body: JSON.stringify(user),
//      headers: {"Content-type": "application/json;charset=UTF-8", "Access-Control-Allow-Origin": "*"},
//      mode:"no-cors"
//    }).then(res=>{
//      console.log(res);
//    })
  }

  return (
    <div className="container">
      <div className="regContainer">
        <h1>Registration</h1>
        <div className="inputs">
          <div className="inputRow">
            <label for="fName">
              Your First Name:
            </label>
            <input type="text" name="fName" value={user.firstName} onChange={(e)=>handleChange("firstName", e.target.value)}/>
          </div>
          <div className="inputRow">
            <label for="lName">
              Your Last Name:
            </label>
            <input type="text" name="lName" value={user.lastName} onChange={(e)=>handleChange("lastName", e.target.value)}/>
          </div>
          <div className="inputRow">
            <label for="email">
              Your Email:
            </label>
            <input type="email" name="email" value={user.email} onChange={(e)=>handleChange("email", e.target.value)} />
          </div>
          <div className="inputRow">
            <label for="password">
              Your Password?
            </label>
            <input name="password" type="password" value={user.password} onChange={(e)=>handleChange("password", e.target.value)}/>
          </div>
          <div className="inputRow">
            <label for="login">
              Your Login:
            </label>
            <input name="text" type="login" value={user.login} onChange={(e)=>handleChange("login", e.target.value)}/>
          </div>
        </div>

        <button className="loginButton" onClick={handleSubmit}>Submit</button>
        <Link className="noRegister" to="/">Go back</Link>
      </div>
    </div>
  )

}

export default Registration
