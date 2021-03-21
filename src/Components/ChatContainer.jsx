import React, {useState, useEffect} from 'react';
import './chat.css';
import Chat from './Chat';
import Avatar from '../ava.jpg';
import {ReactComponent as LogOut} from '../logout.svg';
import {useHistory} from 'react-router-dom';

function ChatContainer() {
  const history = useHistory();
  const [activeRoom, setActiveRoom] = useState(0);
  const [avatars, setAvatars] = useState([]);
  const messages = [10];

  useEffect(()=>{
    fetch('https://tinyfac.es/api/users').then(res=>res.json()).then(resData=>setAvatars(resData));
  },[])

  return (
    <div className="container">
      <div className="leftContainer">
        <div className="userBlock">
          <div>
           <img src={avatars[0] ? avatars[0].avatars[0].url : Avatar} alt=""/>
            <div>Yerbol Karshyga</div>
          </div>
          <LogOut style={{height: "50%", color: "#6588DE", justifySelf: "flex-end", cursor: "pointer"}} onClick={()=>history.push('/')}/>
        </div>
        <div className="roomsBlock">
         {messages.map( (value, index)=> {
              return <div className={`roomChat ${activeRoom===value ? "active" : null}`} onClick={()=>setActiveRoom(value)}>
                <img src={avatars[0] ? avatars[Math.floor(Math.random()*Math.floor(avatars.length))].avatars[0].url : Avatar} alt=""/>
                <div>{value}: Test Room</div>
              </div>

            })
          }
        </div>
      </div>
      <div className="rightContainer">
        <Chat roomNumber={activeRoom} userName = {"Yerbol Karshyga"} />
      </div>
    </div>
  )
}

export default ChatContainer;
