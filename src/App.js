import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home(){
  return(
    <div>
      <h1>HOME</h1>
      home is .....
    </div>
  );
};

function Topics(){
  return(
    <div>
      <h1>Topics</h1>
      topic is .....
    </div>
  );
};

function Content(){
  return(
    <div>
      <h1>Content</h1>
      Content is .....
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/content">Content</a></li>
      </ul>
      <Route exact path="/"><Home></Home></Route>
      <Route path="/topics"><Topics></Topics></Route>
      <Route path="/content"><Content></Content></Route>
    </div>
  );
}

export default App;
