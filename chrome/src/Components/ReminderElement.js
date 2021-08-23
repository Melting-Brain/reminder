import "./ReminderElement.css";

function ReminderElement({
  name,
  time,
  isOn,
  deleteDummy,
  toggleHandler,
  // setName,
}) {
  return (
    <div className="reminderElement">
      <span>{name}</span>
      <span>{time}분</span>
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
