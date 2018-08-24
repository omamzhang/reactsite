import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><a href="/" className="App-logo"><img src={logo}  alt="logo" /></a>
            <span className="title">Welcome to React</span>
          </h1>
        </header>
        <div className="App-bodyer">
          <RouterConfig/>
        </div>
        <div className="App-footer">

        </div>
      </div>
    );
  }
}