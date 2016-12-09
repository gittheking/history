import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      history: [<Home />],
      current: <Home />
    };
  }

  switchComponent(comp) {
    const history = this.state.history;
    history.push(comp);
    this.setState({
      history,
      current: comp
    });
  }

  goBack() {
    const history = this.state.history;
    if(history.length > 1) {
      history.pop()
      this.setState({
        history,
        current: history[history.length - 1]
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <div onClick={() => this.switchComponent(<Home />).bind(this)}>
            Home
          </div>
          <div onClick={() => this.switchComponent(<Contact />).bind(this)}>
            Contact
          </div>
          <div onClick={() => this.switchComponent(<About />).bind(this)}>
            About
          </div>
        </div>
        {this.state.current}
        <button onClick={this.goBack.bind(this)}>
          Go Back
        </button>
      </div>
    );
  }
}

export default App;
