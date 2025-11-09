import Card from "../../components/Card/Card";
import "./Calendar.css";

function Calendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
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

      {/* <Card>
        <h2>1</h2>
         onClick -> Türchen öffnen in Modal 
      </Card> */}
    </>
  );
}

export default Calendar;
