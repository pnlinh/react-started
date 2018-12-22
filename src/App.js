import React, { Component } from 'react';
import './App.css';

let One = (props) => (
  <div>First React App - {props.name}</div>
);

const Two = (props) => (
    <div>Demo App - {props.name}</div>
);

const Four = (props) => {
  let abc = <span>Hello Word</span>;

  return (
      <div>
        <span>Four - {abc}</span>
      </div>
  );
};

function Three(props) {
  return <div>La la la - {props.name}</div>;
}

function MultipleLines(props) {
  return (
      <div>
        <div>Multiple lines - {props.name}</div>
        <div>Multiple lines - {props.name}</div>
      </div>
  );
}

class Person extends Component {
  render() {
    return (
        <div>
          <div>Name: {this.props.name}</div>
          <div>Age: {this.props.age}</div>
        </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello ReactJS
          </p>

            <One name="One"/>
            <Two name="Two"/>
            <Three name="Three"/>
            <Four/>
            <MultipleLines name="Multiple lines"/>
            <Person name="Ngọc Lịnh" age="23"/>
            <Person name="Ai đó" age="20"/>
        </header>
      </div>
    );
  }
}

export default App;
