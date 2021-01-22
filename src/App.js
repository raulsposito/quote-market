import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import Home from './components/Home.js'
import Signup from './components/Signup.js'
import Login from './components/Login'
import PostsContainer from './components/PostContainer'
import PostForm from './components/PostForm'
import PostInput from './components/PostInput'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

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
        <NavBar />
        { loggedIn ? <MainContainer /> : <Home /> }
        <Switch>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/posts' component={PostsContainer}/>
          <Route exact path='/posts/new' component={PostInput}/>
        </Switch>
        <Footer/>
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
