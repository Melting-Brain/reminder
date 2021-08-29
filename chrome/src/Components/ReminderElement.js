import "../Style/ReminderElement.css";
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

  const [timerID, setTimerID] = useState(null);
  useEffect(() => {
    const timer = () => {
      return setInterval(() => {
        console.log(`${name} ${time}분 지났습니다.`);
      }, time * 60000);
    };

    clearInterval(timerID);
    if (isToggleOn) {
      setTimerID(timer());
    }
  }, [name, time, isToggleOn]);

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
  };

  // 시간 바꿀때 리마인드 리스트에 적용되는 시점을 온블러에서 뉴 타임이 바뀔때로 바꿈.
  useEffect(() => {
    let newList = reminderList.map((el, index) => {
      if (index === idx) {
        el.time = newTime;
      }
      return el;
    });
    setReminderList([...newList]);
  }, [newTime]);

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
            min="10"
            max="360"
            step="10"
            value={newTime}
            placeholder={"숫자입력"}
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
          {newTime >= 60 ? newTime % 60 === 0 ? <div className="reminder__display__time">{newTime / 60}시간</div> : <div className="reminder__display__time">{Math.floor(newTime / 60)}시간 {newTime % 60}분</div> : <div className="reminder__display__time">{newTime}분</div>}
        </div>

        {/* Delete Button */}
        <div className="reminder__delete" onClick={deleteDummy}>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div >
  );
}
export default ReminderElement;
