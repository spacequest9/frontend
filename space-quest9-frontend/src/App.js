import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Homepage from './components/Homepage'
import Canvas from './components/Canvas'
import './App.css';

function App() {

  return (
    <div className="App">
      <Route exact path = "/" component = {Homepage}></Route>
      <Route path = "/login" component = {Login}></Route>
      <Route path = "/register" component = {Register}></Route>
      <Route exact path = "/game" component = {Canvas}></Route>
    </div>
  );
}

export default App;
