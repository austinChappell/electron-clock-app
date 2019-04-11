import React, { Component } from 'react';
import './App.css';
import Time from './components/Time';
import DigitalClock from './components/DigitalClock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Time>
            {({ timeData }) => (
              <DigitalClock timeData={timeData} />
            )}
          </Time>
        </header>

      </div>
    );
  }
}

export default App;
