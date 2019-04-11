// External Dependencies
import React, { useState } from 'react';

// Local Variables
function displayTime({
  civilianHour,
  minutes,
  period,
  seconds,
}) {
  return `${civilianHour}:${minutes}:${seconds} ${period}`;
}

function displayMilitaryTime({
  hours,
  minutes,
  period,
  seconds,
}) {
  return `${hours}:${minutes}:${seconds}`;
}

// Component Definition
const DigitalClock = ({
  timeData,
}) => {
  const [isMilitaryTime, setIsMilitaryTime] = useState(false);

  function toggleDisplay() {
    setIsMilitaryTime(!isMilitaryTime);
  }

  return (
    <div>
      {isMilitaryTime ? displayMilitaryTime(timeData) : displayTime(timeData)}

      <div>
        <button onClick={toggleDisplay}>
          {isMilitaryTime ? '12hr' : '24hr'}
        </button>
      </div>
    </div>
  )
}

export default DigitalClock;
