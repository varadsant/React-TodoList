import './App.css';
import React from 'react';
import SecondApp from './secondFile';


function Header(){
  return (
    <h1>Header Tag</h1>
  )
}

function Footer(){
  return (
    <h2> Footer Tag </h2>
  )
}

function Main(){
  return(
    <h4><b>Main Content</b></h4>
  )
}

function App() {
  return (
    <div className="App">
      <SecondApp/>
    </div>
  );
}

export default App;
