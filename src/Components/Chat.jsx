import React, {useState, useEffect, useRef} from 'react';
import './chat.css';
import openSocket from 'socket.io-client';
import socketIOClient from 'socket.io-client';
import {useHistory} from 'react-router-dom';
import useChat from './useChat';

function Chat({roomNumber, userName}) {
  const history = useHistory();
  const [messageso, setMessageso] = useState([{me: false, msg:"hello world", name: "Test Telegram"}]);

  const {messages, sendMessage} = useChat(roomNumber);
  const [message, setMessage] = useState('');
  const socketRef = useRef(null);
  const socket = openSocket("http://62.171.186.222:3000");

  useEffect(()=>{
    if (roomNumber) {
      fetch(`http://62.171.186.222:9090/api/room/join?roomId=${roomNumber}`, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8", Authorization:`Bearer ${sessionStorage.token}`},
      }).then(res=>res.json())
      .then(resData=>{
        console.log(resData);
      });

      fetch(`http://62.171.186.222:9090/api/messages/${roomNumber}`, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8", Authorization:`Bearer ${sessionStorage.token}`},
      }).then(res=>res.json())
      .then(resData=>{
        console.log(resData);
      });
    }

    socket.on("10", data=>{
      console.log(data)
    });

  }, [roomNumber])



  console.log(messages);

  const sendMessageToChat = () =>{
//    fetch('https://hacknu-telegram-bot.herokuapp.com/room/updates', {
//      method: "POST",
//      body: JSON.stringify({roomId: roomNumber, message: `${userName} \n${message}`, secretKey: "DELTA"}),
//      headers: {"Content-type": "application/json;charset=UTF-8", Authorization:`Bearer ${sessionStorage.token}`, 'Access-Control-Allow-Origin': '*'},
//      mode:'no-cors'
//    }).then(res=>{
//      setMessage("");
//      setMessages(messages => [...messages, {
//        me: true,
//        msg: message,
//        name: userName
//      }])
//    });
    sendMessage(message, {name: userName, id: 1});

  }

  return (
    <div className="chatOutContainer">
      <div className="chatContainer">
        {roomNumber ? messageso.map((value, index)=>{
          return (
            <div className="messageBlock" style={{alignItems: value.me ? "flex-end" : "flex-start"}} key={index}>
             <div className="message" >
                <span>{value.name}</span>
                <div className="messageContent" style={{background: value.me ? "#E3F6FC" : "#F3BA4A", borderTopRightRadius: value.me ? "0" : "14px", borderTopLeftRadius: value.me ? "14px" : "0px"}}>{value.msg}</div>
             </div>

            </div>
          )
        }) : null}
      </div>
      <div className="chatInputBlock">
        <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button onClick={sendMessageToChat}>Send</button>
      </div>
    </div>

  )

}

export default Chat
