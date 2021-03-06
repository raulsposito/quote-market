import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import Home from './components/Home.js'
import Signup from './components/Signup.js'
import Login from './components/Login'
import Logout from './components/Logout'
import PostsContainer from './components/PostContainer'
import UsersContainer from './components/UsersContainer'
import SinglePost from './components/SinglePost'
import NewPostForm from './components/NewPostForm'
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
      <div className="all">
        <Header />
        <div className="App">
          { loggedIn ? <MainContainer /> : "" }
          { loggedIn ? <NavBar /> : <Home /> }
          <Switch>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/posts' component={PostsContainer}/>
            <Route exact path='/posts/new' component={NewPostForm}/>
            <Route exact path='/posts/:id' component={SinglePost}/>
            <Route exact path='/users' />
          </Switch>
          { loggedIn ? <Logout /> : "" }
          <Footer/>
        </div>
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
