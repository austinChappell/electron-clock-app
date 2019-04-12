import React, { useState } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import './App.css';
import Time from './components/Time';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';
import Switch from './components/Switch';
import AlarmEditor from './components/AlarmEditor.js';

// Local Variables
const ClockWrapper = styled.div`
  padding: 50px 20px;
`;

// Component Definition
const App = () => {
  const [isDigital, setIsDigital] = useState(false);

  function toggleClock() {
    setIsDigital(!isDigital)
  }

  return (
    <div className="App">
      <header className="App-header">
        <AlarmEditor />

        <Switch
          offText="Analog"
          onChange={toggleClock}
          on={isDigital}
          onText="Digital"
        />

        <ClockWrapper>
          <Time>
            {({ timeData }) => (
              isDigital ? (
                <DigitalClock timeData={timeData} />
              ) : (
                <AnalogClock timeData={timeData} />
              )
            )}
          </Time>
        </ClockWrapper>
      </header>

    </div>
  );
}

export default App;
