import React, { Component } from "react";
import Routes from "./Routes.js";
import axios from 'axios';
import './app.css';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = `http://localhost:3456/`;

class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

export default App;