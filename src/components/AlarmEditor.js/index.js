// External Dependencies
import React from 'react';
import styled from 'styled-components'

// Internal Dependencies
import Wheel from './Wheel';

// Local Variables
function createArrOfNums(num, start = 1) {
  const array = [];
  let counter = start;
  while (counter <= num) {
    array.push(counter);
    counter += 1;
  }
  return array;
}
const hours = createArrOfNums(12);
const minutes = createArrOfNums(59, 0);
const Flex = styled.div`
  display: flex;
`;

// Component Definition
const AlarmEditor = () => {
  return (
    <Flex>
      <Wheel options={hours} />
      <Wheel options={minutes} />
      <Wheel options={['am', 'pm']} />
    </Flex>
  )
}

export default AlarmEditor;
