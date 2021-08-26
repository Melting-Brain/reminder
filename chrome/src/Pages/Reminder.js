import { useState, useEffect } from "react";
import ReminderElement from "../Components/ReminderElement";
import "./Reminder.css";
import uuid from "react-uuid";

const Reminder = () => {
  const dummy = [
    {
      id: 1,
      name: "물 마시기",
      time: 30,
      isOn: true,
    },
    {
      id: 2,
      name: "스트레칭",
      time: 60,
      isOn: true,
    },
  ];

  const [reminderList, setReminderList] = useState(dummy);

  useEffect(() => {
    if (localStorage.getItem("reminderData") !== null) {
      setReminderList(JSON.parse(localStorage.getItem("reminderData")));
    }
  }, []);

  const addDummy = () => {
    setReminderList([
      ...reminderList,
      {
        id: uuid(),
        name: "입력바람",
        time: 10,
        isOn: true,
      },
    ]);
  };

  const deleteDummy = (e) => {
    setReminderList(reminderList.filter((el) => el.id !== e.id));
  };

  const toggleHandler = (e) => {
    // 인덱스로 접근  필터 -> 맵  사용하면 어떨가요?
    let toggleList = reminderList.map((el) => {
      if (e.id === el.id) {
        el.isOn = !el.isOn;
      }
      return el;
    });
    setReminderList([...toggleList]);
  };

  useEffect(() => {
    localStorage.setItem("reminderData", JSON.stringify(reminderList)); //리마인더리스트를 로컬스토리지에 저장
  }, [reminderList]);

  // const setName = (e) => {    // 이름변경  함수
  //   let list2 = reminderList.map((el) => {
  //     if (e.id === el.id) {
  //       el.name = "입력창 뜨게하기" ; // 온클릭 후 온체인지 팝업 떠서
  //     }
  //       return el;
  //   });
  //   setReminderList([...toggleList]);
  // }
  return (
    <div className="container__reminder">
      <h3 className="reminder__title">Reminder</h3>
      {reminderList.map((e, idx) => {
        return (
          <ReminderElement
            idx={idx}
            key={e.id}
            name={e.name}
            time={e.time}
            isOn={e.isOn}
            deleteDummy={() => deleteDummy(e)}
            toggleHandler={() => toggleHandler(e)}
            reminderList={reminderList}
            setReminderList={setReminderList}
            // setName={() => setName(e)}
          />
        );
      })}
      <div className="reminder__container__add">
        <div className="reminder__add" onClick={addDummy}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
