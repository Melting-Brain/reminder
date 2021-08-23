import { useState } from "react";
import ReminderElement from "../Components/ReminderElement";
import "./Reminder.css";
import uuid from "react-uuid";

const Reminder = () => {
  const dummy = [
    {
      id: uuid(),
      name: "물 마시기",
      time: 30,
      isOn: true,
    },
    {
      id: uuid(),
      name: "스트레칭",
      time: 60,
      isOn: true,
    },
  ];

  const [reminderList, setReminderList] = useState(dummy);

  const addDummy = () => {
    setReminderList([
      ...reminderList,
      {
        id: uuid(),
        name: "입력바람",
        time: "시간설정",
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
        console.log("바꿈");
      }
      return el;
    });
    setReminderList([...toggleList]);
  };

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
      {reminderList.map((e) => {
        return (
          <ReminderElement
            key={e.id}
            name={e.name}
            time={e.time}
            isOn={e.isOn}
            deleteDummy={() => deleteDummy(e)}
            toggleHandler={() => toggleHandler(e)}
            // setName={() => setName(e)}
          />
        );
      })}
      <div className="reminder__container__add">
        <div className="reminder__add" onClick={addDummy}>
          +
        </div>
      </div>
    </div>
  );
};

export default Reminder;
