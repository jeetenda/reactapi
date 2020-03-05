import React, { Component } from 'react';
import { connect } from 'react-redux';
 import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

class App extends Component {
  
  render() {
    return (
      <div className="App">
       {this.props.is_loggedin?
        <Dashboard/>
        :<Login/>
       }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      is_loggedin:state.is_loggedin
  };
};
export default connect(mapStateToProps)(App);
