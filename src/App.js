import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import Tabs from './components/layout/Tabs'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      
        <Router>
            <div>
              <NavBar />
              <Tabs />
              <Routes />
            </div>
        </Router>
      
    );
  }
}

export default App;