import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './mocks/login';

function App() {
  return (
    <div className="App">
    <header>
      <nav>
        <Link to='/login'>Login</Link>
        <a href='#'>Friends</a>
        <a href='#'>Add friend</a>
        <a href='#'>Logout</a>
      </nav>
    </header>
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
