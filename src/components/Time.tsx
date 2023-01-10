import React from 'react';
import { useEffect, useState } from 'react';

interface Props {
  initialTime: string;
}

const Time: React.FC<Props> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          weekday: 'short',
          year: '2-digit',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default Time;
