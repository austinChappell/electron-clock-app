// External Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Local Variables
const propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  value: PropTypes.string.isRequired,
};
const Container = styled.div`
  border: 1px solid white;
  font-size: 30px;
  height: 80px;
  overflow: hidden;
  position: relative;
  width: 50px;
`;
const Inner = styled.div`
  align-items: center;
  box-sizing: content-box;
  display: flex;
  height: 100%;
  margin: 0;
  width: 100%;
`;
const Center = styled.ul`
  box-sizing: content-box;
  height: 30px;
  overflow-y: scroll;
  padding-right: 17px;
  padding: 20px 0;
  position: relative;
  width: 100%;
`;
const Overlay = styled.div`
  background: linear-gradient(#000000ff, #00000000, #000000ff);
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
`;

const Option = styled.li`
`;

const Wheel = (props) => {
  const [selection, setSelection] = useState(props.value);

  function handleScroll(evt) {
    console.log('scrolling', evt.target)
  }

  return (
    <Container>
      <Inner>
        <Center onScroll={handleScroll}>
          {props.options.map(option => (
            <Option key={option}>
              {option}
            </Option>
          ))}
        </Center>
      </Inner>
      <Overlay />
    </Container>
  )
}

Wheel.propTypes = propTypes;

export default Wheel;
