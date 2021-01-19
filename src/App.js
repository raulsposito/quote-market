import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import Home from './components/Home.js'
import Signup from './components/Signup.js'
import Login from './components/Login'
import PostForm from './components/PostForm'

import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render(){
    const { loggedIn } = this.props
    return (
      <div className="App">
        <Header />
        { loggedIn ? <NavBar /> : <Home /> }
        <Switch>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/posts/new' component={PostForm}/>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
