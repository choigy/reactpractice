import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      <Route><Home></Home></Route>
      <Route><Topics></Topics></Route>
      <Route><Content></Content></Route>
    </div>
  );
}

export default App;
