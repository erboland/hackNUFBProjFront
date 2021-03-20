import React from 'react';
import './chat.css';

function Chat() {

  const messages = [{me: true}, {me: false}, {me: true}, {me: false}, {me: true}, {me: false}, {me: true}, {me: false}, {me: true}, {me: false}, {me: true}, {me: false}];

  return (
    <div className="chatOutContainer">
      <div className="chatContainer">
        {messages.map((value, index)=>{
          return (
            <div className="messageBlock" style={{alignItems: value.me ? "flex-end" : "flex-start"}}>
             <div className="message" >
                <span>Yerbol Karshyga</span>
                <div className="messageContent" style={{background: value.me ? "#E3F6FC" : "#F3BA4A", borderTopRightRadius: value.me ? "0" : "14px", borderTopLeftRadius: value.me ? "14px" : "0px"}}>Hello world</div>
             </div>

            </div>
          )
        })}
      </div>
      <div className="chatInputBlock">
        <input type="text"/>
        <button>Send</button>
      </div>
    </div>

  )

}

export default Chat
