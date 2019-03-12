import React, { Component } from 'react';

import './App.css';
import { HomeView } from './components/views/HomeView';


class App extends Component {
  render() {
    return (
        <div className="App">
          <HomeView />
        </div>
    );
  }
}


export default App;
