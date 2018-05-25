import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  onClick()
  {
    alert('clicked');
  }
  render() {

    const list=
    [
      'Item 1',
      'Item 2',
      'Another item'
    ];


    const  title='';
    const test='Another title';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>
        {
         list.map(item=>{
           return (
            <div onClick={this.onClick}>{item}</div>
           )
         })
        }</h1>
      </div>
    );
  }
}

export default App;
