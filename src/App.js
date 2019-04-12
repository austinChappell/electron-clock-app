import React, { useState } from 'react';

// Internal Dependencies
import './App.css';
import Time from './components/Time';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';

const App = () => {
  const [isDigital, setIsDigital] = useState(false);

  function toggleClock() {
    setIsDigital(!isDigital)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleClock}>
          {isDigital ? 'Analog' : 'Digital'}
        </button>
        <Time>
          {({ timeData }) => (
            isDigital ? (
              <DigitalClock timeData={timeData} />
            ) : (
              <AnalogClock timeData={timeData} />
            )
          )}
        </Time>
      </header>

    </div>
  );
}

export default App;
