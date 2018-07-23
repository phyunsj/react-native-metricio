import React, { Component } from "react";
import { AppState, Alert } from "react-native";
import socketIOClient from 'socket.io-client';

import Dashboard from './src/dashboard';

export default class App extends Component {

  constructor() {
    super();
    
    this.state = {
      endpoint : 'http://192.168.1.10:3000',
      connected : false,
      appState: AppState.currentState
    };
    this.socket = socketIOClient(this.state.endpoint);
    this.reconnect = this.reconnect.bind(this);
    this.disconnect = this.disconnect.bind(this);

  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  componentDidMount() {
    this.showAlert("Connect?", this.state.endpoint);
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    console.log("appState:", nextAppState);
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      //this.showAlert("Connect?", this.state.endpoint); // ask again?
      // or 
      this.reconnect(); // reconnect silently
    }
    if ( nextAppState.match(/inactive|background/) ) this.disconnect();
    this.setState({appState: nextAppState});
  }

  reconnect() {
    this.socket = socketIOClient(this.state.endpoint);   
    this.setState({ connected: true });
  }
  
  disconnect() {
    //this.socket.emit('disconnect');
    this.socket.close();
    this.setState({ connected: false });
  }

  triggerAlert() {
    if ( !this.state.connected ) {
      this.showAlert("Connect?", this.state.endpoint);
    }
  }

  showAlert = (title, msg) => {
    Alert.alert(
      title,
      msg,
      [
        {text: 'Cancel', onPress: () => { setTimeout( () => { this.triggerAlert(); },5000); console.log('Cancel Pressed')} , style: 'cancel'},
        {text: 'OK', onPress: () => { this.reconnect(); console.log('OK Pressed'); } }
      ],
      { cancelable: false }
    )
  };

  render() {
    return (
        <Dashboard name="main" socket={this.socket} />     
    );
  }
}
