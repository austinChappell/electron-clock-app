// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Internal Dependencies
import ClockFace from './ClockFace';
import Hand from './Hand';

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
const clockRadius = 150;

// Component Definition
const AnalogClock = (props) => {
  const { secondsIntoCurrentDay } = props.timeData;
  return (
    <ClockFace size={clockRadius * 2}>
      <Hand
        handType="hour"
        radius={clockRadius}
        secondsIntoDay={secondsIntoCurrentDay}
      />
      <Hand
        handType="minute"
        radius={clockRadius}
        secondsIntoDay={secondsIntoCurrentDay}
      />
      <Hand
        handType="second"
        radius={clockRadius}
        secondsIntoDay={secondsIntoCurrentDay}
      />
    </ClockFace>
  )
}

AnalogClock.propTypes = propTypes;

export default AnalogClock;
