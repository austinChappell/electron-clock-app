// External Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Local Variables
const propTypes = {
  timeData: PropTypes.shape({
    civilianHour: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    minutes: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    seconds: PropTypes.string.isRequired,
    secondsIntoCurrentDay: PropTypes.number.isRequired,
  }).isRequired,
}

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

DigitalClock.propTypes = propTypes;

export default DigitalClock;
