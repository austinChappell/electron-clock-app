// External Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Internal Dependencies
import Switch from './Switch';

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
const ClockContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 300px;
  padding-top: 50px;
`;

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
      <ClockContainer>
        {isMilitaryTime ? displayMilitaryTime(timeData) : displayTime(timeData)}

        <Switch
          offText="12hr"
          onChange={toggleDisplay}
          on={isMilitaryTime}
          onText="24hr"
        />
      </ClockContainer>
    </div>
  )
}

DigitalClock.propTypes = propTypes;

export default DigitalClock;
