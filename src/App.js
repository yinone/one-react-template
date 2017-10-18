import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';
import 'normalize.css';

class App extends React.Component{
  render() {
    return (<div>hello</div>)
  }
}

export default App;
