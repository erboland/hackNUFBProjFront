import React, {useState} from 'react';
import './chat.css';
import Chat from './Chat';
import Avatar from '../ava.jpg';

function ChatContainer() {

  const [activeRoom, setActiveRoom] = useState(0);
  const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container">
      <div className="leftContainer">
        <div className="userBlock">
          <img src={Avatar} alt=""/>
          <div>Yerbol Karshyga</div>
        </div>
        <div className="roomsBlock">
         {messages.map( (value, index)=> {
              return <div className={`roomChat ${activeRoom===index ? "active" : null}`} onClick={()=>setActiveRoom(index)}>
                <img src={Avatar} alt=""/>
                <div>555888</div>
              </div>

            })
          }
        </div>
      </div>
      <div className="rightContainer">
        <Chat/>
      </div>
    </div>
  )
}

export default ChatContainer;
