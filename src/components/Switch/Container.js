// External Dependencies
import styled from 'styled-components';

// Component Definition
const Container = styled.div`
  background-color: ${props => props.on ? '#61dafb' : '#cccccc'};
  border-radius: 1000px;
  cursor: pointer;
  padding: 2px;
  position: relative;
  transition: 300ms;
  width: 60px;
`;

export default Container;
