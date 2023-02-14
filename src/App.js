import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import store from 'store';

import './App.css';
import Home from './components/Home';
import Posts from './components/Posts';
import Userdetails from './components/UserDetails';
import Authorlist from './components/Authorslist';
import Todolist from './components/Todolist';
import Albumcard from './components/Albumcard';
import Postdetails from './components/Postdetails';
import Login from './components/Login';
import Albumlist from './components/Albumlist';
// import Albumlistsdup from './components/Albumlistsdup';
// import Notfound from './components/Notfound';

const PrivateRoute = ({ component: Component, ...rest }) => 
<Route {...rest} render={props => isLoggedIn() ? <Component {...props}/> : <Redirect to='/login' />  } />

const isLoggedIn = () => {
  if(typeof store.get('userSession') === 'object'){
    return true
  }
    return false
}

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/' component={Posts} />
        <PrivateRoute exact path='/post' component={Posts} />
        <PrivateRoute exact path='/author/:id?' component={Authorlist} />
        <PrivateRoute exact path='/todolist/:id?' component={Todolist} />
        <PrivateRoute exact path='/user/:id?' component={Userdetails} />
        <PrivateRoute exact path='/albumlists/:id?' component={Albumlist} />
        <PrivateRoute exact path='/album/:userid?/:id?/:img?' component={Albumcard} />
        <PrivateRoute exact path='/postdetail/:postid?' component={Postdetails} />
        <Route exact path='/login' component={Login} />
          {/* <Route component={Notfound} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
