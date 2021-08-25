import React from 'react';
import { TimePicker } from 'react-rainbow-components';
import { useState } from "react";
import "./TimeSelector.css"


const TimeSelector = () => {
const containerStyles = {
    maxWidth: 300, 
};
// const initialState = { value: new Date() };
const [Time,setTime] = useState({ value: new Date() })
  return (
    <div>
        <TimePicker
            className="TimePicker"
            value={Time.value}
            label=""
            onChange={value => setTime({ value })}
            style={containerStyles}
            // className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
    </div>
  )
}

export default TimeSelector 