import Card from "../../components/Card/Card";
import "./Calendar.css";

function Calendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // console.log("days :>> ", days);
  // const mappedDays = days.map((_, x) => x + 1);

  // console.log("mappedDays :>> ", mappedDays);

  return (
    <>
      <h1>End of Year Calender</h1>

      <p className="calendar">
        Dies ist kein typischer Adventskalender. Er endet auch nicht am
        24.Dezember.
        <br />
        Dieser Kalender ist für dich, wenn du dein Jahr reflektieren möchtest
        und du dich für das neue Jahr ausrichten möchtest.
        <br />
        Du kannst ihn gerne auch vor deinem Geburtstag nutzen.
      </p>

      {days.map((day) => (
        <Card key={day} dayId={day}>
          <h3>Tag {day}</h3>
        </Card>
      ))}
    </>
  );
}

export default Calendar;

// Kalendertürchen öffnen
// 1. current Date herausfinden
// 2. if (new Date().getDate() >= day) {
// Türchen darf geöffnet werden }
