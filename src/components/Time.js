// External Dependencies
import { useState } from 'react';

// Internal Dependencies
import { getTime, useTime } from '../hooks/useTime';

// Component Definition
const Time = (props) => {
  const [timeData, setTimeData] = useState(getTime());

  useTime(setTimeData);

  return props.children({ timeData });
}

export default Time;
