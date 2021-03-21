import React, {useState} from 'react';
import './signIn.css';
import {Link, useHistory} from 'react-router-dom';

function Registration() {
  const history = useHistory();

  const [user, setUser] = useState ({email: "", password:"", firstName:"", lastName:"", login: ""});

  const handleChange = (type, value) =>{
    switch (type){
      case "email":
        setUser({...user, email: value});
        break;
      case "password":
        setUser({...user, password: value});
        break;
      case "firstName":
        setUser({...user, firstName: value});
        break;
      case "lastName":
        setUser({...user, lastName: value});
        break;
      case "login":
        setUser({...user, login: value});
        break;
      default:
        console.log('no such case');
        break;
    }
  }

  const handleSubmit = () =>{
    fetch('http://62.171.186.222:9090/api/account/create', {
      method: "POST",
      body: JSON.stringify(user),
      headers: {"Content-type": "application/json;charset=UTF-8", "Access-Control-Allow-Origin": "*"},
    }).then(res=>res.json())
    .then(resData=>{
      resData.token ? history.push('/chat') : alert("Something went wrong. Check your credentials");
    })
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
