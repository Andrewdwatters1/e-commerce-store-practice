import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome the Store Site</h1>
        </header>
        <Link to="/storelanding"><button>Go to the Store</button></Link>
        <Link to="/about"><button>About us</button></Link>
        <Link to="/history"><button>Store History</button></Link>
      </div>
    );
  }
}

export default App;
