// External Dependencies
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Local Variables
const propTypes = {
  size: PropTypes.number.isRequired,
}

// Component Definition
const ClockFace = styled.div`
  border: 5px solid white;
  border-radius: 50%;
  height: ${props => props.size}px;
  position: relative;
  width: ${props => props.size}px;
`;

ClockFace.propTypes = propTypes;

export default ClockFace;
