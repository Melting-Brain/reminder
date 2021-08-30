import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import '../Style/TodoCountDown.css'
import { useState, useEffect } from 'react';
import React from 'react';

const TodoCountDown = ({deadLine}) => {
  const [key, setKey] = useState(0);
  const now = new Date();
  const source = String(now).split(' ');
  source[4] = deadLine;
  const result = new Date(source.join(' '));
  const [remainTime, setRemainTime] = useState(result > now ? (result - now) / 1000 : 0);
  
  useEffect(() => {
    setRemainTime(result > now ? (result - now) / 1000 : 0);
    setKey(key => key + 1);
  }, [deadLine])

  const formatRemainingTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    let result;
    if (time < 60) result =`${seconds}s`
    else if (60 < time && time < 3600) result = `${minutes}m ${seconds}s`
    else result = `${hours}h ${minutes}m`
    return result  
  };

  const TodoRenderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        <div className="timer">End</div>
      )
    }

    return (
      <div className="timer">
        <div className="value">{formatRemainingTime(remainingTime)}</div>
      </div>
    );
  };
  

  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying
          isLinearGradient={true}
          duration={remainTime}
          size={40}
          strokeWidth={1}
          colors={[["#3E82D6", 0.33], ["#69A8A0", 0.33], ["#90C670", 0.33]]}
        >
        {TodoRenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default TodoCountDown