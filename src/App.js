import React, { useState } from 'react';

// Internal Dependencies
import './App.css';
import Time from './components/Time';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';
import Switch from './components/Switch';

// Component Definition
const App = () => {
  const [isDigital, setIsDigital] = useState(false);

  function toggleClock() {
    setIsDigital(!isDigital)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Switch
          offText="Analog"
          onChange={toggleClock}
          on={isDigital}
          onText="Digital"
        />
        <div style={{ height: 400 }}>
          <Time>
            {({ timeData }) => (
              isDigital ? (
                <DigitalClock timeData={timeData} />
              ) : (
                <AnalogClock timeData={timeData} />
              )
            )}
          </Time>
        </div>
      </header>

    </div>
  );
}

export default App;
