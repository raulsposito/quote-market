import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  render(){
    return (
      <NavBar />
    );
  }
  
}

const mapStateToProps = state => {
  return {
    currentUser: state
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
