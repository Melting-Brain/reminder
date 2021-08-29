import React from 'react';
import { TimePicker } from 'react-rainbow-components';
// import { useState } from "react";
import "../Style/TimeSelector.css"


const TimeSelector2 = ({setTime,Time, inputValue, setInputValue}) => {
const containerStyles = {
    maxWidth: 300, 
};

const changeTime = ({value}) => {
  setTime({value})
  setInputValue(Object.assign({}, inputValue, {deadLine: value}));
}

// const initialState = { value: new Date() };
  return (
    <div>
        <TimePicker
            className="TimePicker"
            value={Time.value}
            label=""
            onChange={value => changeTime({value})}
            style={containerStyles}
            // className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
    </div>
  )
}

export default TimeSelector2 