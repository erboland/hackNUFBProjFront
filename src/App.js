import './App.css';
import {useEffect} from 'react';
import {HashRouter, useHistory} from 'react-router-dom';
import {HashRouter as Switch, Route} from 'react-router-dom';
import SignIn from './Components/SignIn';
import Registration from './Components/Registration';
import RoomEnter from './Components/RoomEnter';
import ChatContainer from './Components/ChatContainer';
import Rooms from './Components/Rooms';

function App() {
  const history = useHistory();

  useEffect(()=>{
    if (!sessionStorage.token) {
      history.push('./')
    };
  });

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/room" component={RoomEnter}/>
          <Route path="/chat" component={ChatContainer}/>
          <Route path="/rooms" component={Rooms}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
