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
  const [isEditTime, setIsEditTime] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newTime, setNewTime] = useState(time);
  const inputName = useRef(null);
  const inputTime = useRef(null);

  useEffect(() => {
    setIsToggleOn(isOn);
  }, [isOn]);

  const showPopup = () => {
    setTimeout(() => {
      console.log("hi");
    }, time * 60000);
  };

  useEffect(() => {
    if (isToggleOn) {
      showPopup();
    }
  }, [isToggleOn]);

  useEffect(() => {
    if (isEditName) {
      inputName.current.focus();
    }
    if (isEditTime) {
      inputTime.current.focus();
    }
  }, [isEditName, isEditTime]);

  const handleEdit = (e) => {
    if (e.target.className === "reminder__edit__name") {
      setIsEditName(!isEditName);
    }
    if (e.target.className === "reminder__edit__time") {
      setIsEditTime(!isEditTime);
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
      setIsEditTime(!isEditTime);
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

      {isEditTime ? (
        <div className="reminder__edit__time">
          <input
            type="number"
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
        </div>
      ) : newTime === "0" || newTime === "" ? (
        <div className="reminder__edit__time" onClick={(e) => handleEdit(e)}>
          숫자입력
        </div>
      ) : (
        <div className="reminder__edit__time" onClick={(e) => handleEdit(e)}>
          {time} 분
        </div>
      )}
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
      <div className="reminder__delete" onClick={deleteDummy}>
        X
      </div>
    </div>
  );
}
export default ReminderElement;
