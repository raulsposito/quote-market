import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Home from './components/Home.js'
import Signup from './components/Signup.js'
import Login from './components/Login'
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
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
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
