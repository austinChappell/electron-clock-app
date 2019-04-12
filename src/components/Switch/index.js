// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Internal Dependencies
import Container from './Container';
import Dot from './Dot';

// Local Variables
const propTypes = {
  offText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired,
  onText: PropTypes.string.isRequired,
}

const Flex = styled.div`
  align-items: center;
  display: flex;
`;
const Text = styled.span`
  font-size: 16px;
  margin: 0 8px;
`;

// Component Definition
const Switch = (props) => {
  return (
    <Flex>
      <Text>
        {props.offText}
      </Text>
      <Container onClick={props.onChange} on={props.on}>
        <Dot on={props.on} />
      </Container>
      <Text>
        {props.onText}
      </Text>
    </Flex>
  )
}

Switch.propTypes = propTypes;

export default Switch;
