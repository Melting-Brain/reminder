import { useState, useEffect } from "react";
import ReminderElement from "../Components/ReminderElement";
import "../Style/Reminder.css";
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

  const dummyName = ['물 마시기', '비타민 먹기', '자리에서 일어나기', '기지개 펴기', '알람 확인하기', '약 먹기', '커피 마시기', '메일 확인하기', '닭가슴살 먹기', '영양제 먹기']

  const [reminderList, setReminderList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("reminderData") === null) {
      localStorage.setItem("reminderData", JSON.stringify(dummy));
    }
    setReminderList(JSON.parse(localStorage.getItem("reminderData")));
  }, []);

  const addReminder = () => {
    setReminderList([
      {
        id: uuid(),
        name: dummyName[Math.floor(Math.random()*10)],
        time: 10,
        isOn: true,
      },
      ...reminderList,
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

  return (
    <div className="container__reminder">
      <h3 className="reminder__title">Reminder</h3>
      <div className="reminder__container__list">
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
          />
        );
      })}
      </div>
      <div className="reminder__container__add">
        <div className="reminder__add" onClick={addReminder}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
