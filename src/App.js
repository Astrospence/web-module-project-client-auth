import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';

function App() {
  return (
    <Router>
      <div className="App">
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/friendlist'>Friend List</Link>
            </li>
            <li>
              <Link to='/addfriend'>Add Friend</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        <Switch>
          <Route exact path='/friendlist' component={FriendList} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
