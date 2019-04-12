// External Dependencies
import { useState } from 'react';

// Internal Dependencies
import { getTime, useTime } from '../hooks/useTime';

// Local Variables
const initialTime = getTime();

// Component Definition
const Time = (props) => {
  const [timeData, setTimeData] = useState(initialTime);

  useTime(setTimeData);

  return props.children({ timeData });
}

export default Time;
