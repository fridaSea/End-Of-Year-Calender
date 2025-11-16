import { useParams } from "react-router-dom";

function Day() {
  const { dayId } = useParams();
  console.log("dayId :>> ", dayId);
  console.log(typeof dayId);

  const dayNumber = parseInt(dayId!); // ! = "ich weiß, dass es existiert"

  // const days = Array.from({ length: 31 }, (_, i) => i + 1);
  // const { dayId } = useParams();
  // const today = new Date().getDate();
  // const isOpen = today >= dayId;
  // console.log("today :>> ", today);

  const contentlist = [
    { day: 1, content: "Hier steht der Inhalt von Tag 1." },
    { day: 2, content: "Hier steht der Inhalt von Tag 2." },
    { day: 3, content: "Hier steht der Inhalt von Tag 3." },
    { day: 4, content: "Hier steht der Inhalt von Tag 4." },
    { day: 5, content: "Hier steht der Inhalt von Tag 5." },
    { day: 6, content: "Hier steht der Inhalt von Tag 6." },
    { day: 7, content: "Hier steht der Inhalt von Tag 7." },
    { day: 8, content: "Hier steht der Inhalt von Tag 8." },
  ];
  console.log(typeof contentlist[0].day);

  const dayContent = contentlist.find((item) => item.day === dayNumber);

  return (
    // <div>
    //   <h1>Tag {dayId}</h1>
    //   <p>Hier kommt der Inhalt für Tag {dayId} hin.</p>
    // </div>

    <div>
      {dayContent ? (
        <div>
          <h2>Tag {dayContent.day}</h2>
          <p>{dayContent.content}</p>
        </div>
      ) : (
        <p>Kein Inhalt für diesen Tag vorhanden.</p>
      )}
    </div>
  );
}

export default Day;
