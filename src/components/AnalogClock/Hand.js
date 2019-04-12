// External Dependencies
import styled from 'styled-components'
import PropTypes from 'prop-types';

// Local Variables
const propTypes = {
  radius: PropTypes.number.isRequired,
  handType: PropTypes.oneOf([
    'hour',
    'minute',
    'second'
  ]).isRequired,
  secondsIntoDay: PropTypes.number.isRequired,
}
const handWidths = {
  hour: 4,
  minute: 3,
  second: 1,
};
const handLengthPercentOfRadius = {
  hour: 0.6,
  minute: 0.9,
  second: 0.8,
};
const ticksPerRevolution = {
  hour: 43200,
  minute: 3600,
  second: 60,
};
function getRotationFromHandType(handType, secondsIntoDay) {
  const numOfTicks = ticksPerRevolution[handType];
  const ticksOfCurrentRevoltuion = secondsIntoDay % numOfTicks;
  const percentageComplete = ticksOfCurrentRevoltuion / numOfTicks;
  const degrees = 360 * percentageComplete;
  return degrees;
}

// Component Definition
const Hand = styled.div.attrs(props => ({
  style: {
    transform: `rotate(${getRotationFromHandType(props.handType, props.secondsIntoDay)}deg)`
  }
}))`
  background-color: white;
  bottom: 50%;
  height: ${props => handLengthPercentOfRadius[props.handType] * props.radius}px;
  left: 50%;
  transform-origin: bottom;
  position: absolute;
  width: ${props => handWidths[props.handType]}px;
`;

Hand.propTypes = propTypes;

export default Hand;
