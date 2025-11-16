import { useParams } from "react-router-dom";

function Day() {
  const { dayId } = useParams();
  // const days = Array.from({ length: 31 }, (_, i) => i + 1);
  // const { dayId } = useParams();
  // const today = new Date().getDate();
  // const isOpen = today >= dayId;
  // console.log("today :>> ", today);

  return (
    <div>
      <h1>Tag {dayId}</h1>
      <p>Hier kommt der Inhalt für Tag {dayId} hin.</p>
    </div>

    // <div>
    //   {isOpen ? (
    //     <p> Viel Freude mit Türchen {dayId}. Es ist jetzt geöffnet</p>
    //   ) : (
    //     <p>Dieser Tag ist noch nicht geöffnet</p>
    //   )}
    // </div>
  );
}

export default Day;
