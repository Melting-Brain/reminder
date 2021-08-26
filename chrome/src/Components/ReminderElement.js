import "./ReminderElement.css";
import { useState, useRef, useEffect } from "react";

function ReminderElement({
  name,
  time,
  isOn,
  deleteDummy,
  toggleHandler,
  reminderList,
  setReminderList,
  idx,
}) {
  const [isToggleOn, setIsToggleOn] = useState(isOn);
  const [isEditName, setIsEditName] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newTime, setNewTime] = useState(time);
  const inputName = useRef(null);
  const inputTime = useRef(null);

  useEffect(() => {
    setIsToggleOn(isOn);
  }, [isOn]);

  useEffect(() => {
    let timerID = setInterval(() => {
      console.log(name);
    }, time * 1000);
    if (!isToggleOn) {
      clearInterval(timerID);
    }
  }, [isToggleOn]);

  useEffect(() => {
    if (isEditName) {
      inputName.current.focus();
    }
  }, [isEditName]);

  const handleEdit = (e) => {
    if (e.target.className === "reminder__edit__name") {
      setIsEditName(!isEditName);
    }
  };

  const handleBlur = (e) => {
    if (e.target.parentNode.className === "reminder__edit__name") {
      setIsEditName(!isEditName);
      let newList = reminderList.map((el, index) => {
        if (index === idx) {
          el.name = newName;
        }
        return el;
      });
      setReminderList([...newList]);
    }
    if (e.target.parentNode.className === "reminder__edit__time") {
      let newList = reminderList.map((el, index) => {
        if (index === idx) {
          el.time = newTime;
        }
        return el;
      });
      setReminderList([...newList]);
    }
  };

  return (
    <div className="reminderElement">
      <div className="reminder__row">
        {/* Reminder Name */}
        {isEditName ? (
          <div className="reminder__edit__name">
            <input
              type="text"
              value={newName}
              placeholder={"입력바람"}
              onBlur={(e) => handleBlur(e)}
              ref={inputName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleBlur(e);
                }
              }}
            />
          </div>
        ) : newName.length === 0 ? (
          <div className="reminder__edit__name" onClick={(e) => handleEdit(e)}>
            입력바람
          </div>
        ) : (
          <div className="reminder__edit__name" onClick={(e) => handleEdit(e)}>
            {name}
          </div>
        )}

        {/* Toggle button */}
        <div
          className={
            isOn
              ? "reminder__toggle__container"
              : "reminder__toggle__container reminder__toggle__container__false"
          }
          onClick={toggleHandler}
        >
          <div
            className={
              isOn
                ? "reminder__toggle__circle"
                : "reminder__toggle__circle reminder__toggle__circle__false"
            }
          ></div>
        </div>
      </div>

      <div className="reminder__row">
        {/* Interval Setting */}
        <div className="reminder__edit__time">
          <input
            className="reminder__adjust__time"
            type="range"
            min="0"
            max="300"
            step="10"
            value={newTime}
            placeholder={"숫자입력"}
            onBlur={(e) => handleBlur(e)}
            ref={inputTime}
            onChange={(e) => {
              if (Number(e.target.value) < 0) {
                e.target.value = "0";
              }
              setNewTime(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleBlur(e);
              }
            }}
          />
          <div className="reminder__display__time">{newTime} 분</div>
        </div>

        {/* Delete Button */}
        <div className="reminder__delete" onClick={deleteDummy}>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}
export default ReminderElement;
