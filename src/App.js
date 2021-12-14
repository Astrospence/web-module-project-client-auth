import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/friends'>Friend List</Link>
            </li>
            <li>
              <Link to='/friends/add'>Add Friend</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        <Switch>
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/friends/add' component={AddFriend} />
          <Route exact path='/friends' component={FriendList} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
