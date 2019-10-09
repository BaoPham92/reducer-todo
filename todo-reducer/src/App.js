import React from 'react';
import logo from './logo.svg';
import './App.css';

// * COMPONENT IMPORTS
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* // * TODO LIST COMPONENT 
      */}
      <TodoList />
    </div>
  );
}

export default App;
