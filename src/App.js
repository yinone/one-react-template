import React, { Component } from 'react';
// import { 
//   BrowserRouter as Router, 
//   Route, 
//   Link 
// } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux';
import Router from 'routes/router';
import { StyleSheet, css } from 'aphrodite/no-important';
import 'normalize.css';

import Profile from 'views/profile';
import Home from 'views/home';

class App extends React.Component{
  goto() {
    // window.location.href = '/pr'
  }
  render() {
    return ( 
      <div className="wrapper">
          <button onClick={ this.goto }>跳转</button>
          <Router path="/" component={ Home } />
          <Router path="/profile" component={ Profile } />
      </div>
    )
  }
}

export default App;
