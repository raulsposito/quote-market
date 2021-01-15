import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import { Route, Switch, withRouter } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Signup from './components/Signup.js'
import Login from './components/Login'
import Home from './components/Home.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render(){
    return (
      <div className="App">
        <NavBar />,
        <Home />
        <Switch>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    currentUser: state
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
