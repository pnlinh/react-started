import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let One = <div>Again</div>;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello ReactJS
          </p>

          <p>
            {One}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
