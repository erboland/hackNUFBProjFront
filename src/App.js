import './App.css';
import {HashRouter} from 'react-router-dom';
import {HashRouter as Switch, Route} from 'react-router-dom';
import SignIn from './Components/SignIn';
import Registration from './Components/Registration';
import RoomEnter from './Components/RoomEnter';
import ChatContainer from './Components/ChatContainer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/room" component={RoomEnter}/>
          <Route path="/chat" component={ChatContainer}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
