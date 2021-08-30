import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import '../Style/TodoCountDown.css'
import { useState, useEffect } from 'react';
import React from 'react';
import TodoRenderTime from './TodoRenderTime';

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
          <TodoRenderTime/>
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default TodoCountDown