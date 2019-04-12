// External Dependencies
import styled from 'styled-components';

// Component Definition
const Dot = styled.div`
  background-color: white;
  border-radius: 15px;
  height: 30px;
  transition: 300ms;
  transform: translateX(${props => props.on ? '100%' : '0%'});
  position: relative;
  width: 30px;
`;

export default Dot;
