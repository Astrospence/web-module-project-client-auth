import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
          <ul>
            <li>
              <Link to='/'>Login</Link>
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
          <PrivateRoute exact path='/logout' component={Logout} />
          <PrivateRoute exact path='/friends/add' component={AddFriend} />
          <PrivateRoute exact path='/friends' component={FriendList} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
