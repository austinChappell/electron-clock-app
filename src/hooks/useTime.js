// External Dependencies
import { useEffect } from 'react';

// Local Variables
function convertMilitaryHours(hour) {
  let isMorning = true;
  let civilianHour = hour;
  if (hour === 0) {
    civilianHour = 12;
  } else if (hour === 12) {
    isMorning = false;
  } else if (hour > 12) {
    isMorning = false;
    civilianHour = hour - 12;
  }

  return {
    civilianHour,
    period: isMorning ? 'am' : 'pm',
  }
}

function padItUp(num) {
  return `${num}`.padStart(2, '0');
}

export function getTime() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const {
    civilianHour, 
    period,
  } = convertMilitaryHours(hours);

  const hoursInSeconds = hours * 3600;
  const minutesInSeconds = minutes * 60;
  const secondsIntoCurrentDay = hoursInSeconds + minutesInSeconds + seconds;

  return {
    civilianHour: padItUp(civilianHour),
    hours: padItUp(hours),
    minutes: padItUp(minutes),
    period,
    seconds: padItUp(seconds),
    secondsIntoCurrentDay,
  };
}

export function useTime(setValue) {
  useEffect(() => {
    setValue(getTime());

    const timer = setInterval(() => {
      setValue(getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [])
}