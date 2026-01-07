import "./App.css";
import useSwitch from "./customHooks/useSwitch";
import useDate from "./customHooks/useDate";
import useCustomPointer from "./customHooks/useCustomPointer";
import useKeyPress from "./customHooks/useKeyPress";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const position = useCustomPointer("❤️");
  const isEnterPressed = useKeyPress("enter");
  return (
    <>
      <div>
        <h1>
          <em>SNACK 1 useSwitch</em>
        </h1>
        <h2>Il valore è: {isOn ? "ON" : "OFF"}</h2>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      <div>
        <h1>
          <em>SNACK 2 useDate</em>
        </h1>
        <h2>Data e ora attuali:</h2>
        <p>{currentDate.toLocaleString()}</p>
      </div>
      <div>
        <h1>
          <em>SNACK 3 useCustomPointer</em>
        </h1>
        <h2>Posizione del mouse:</h2>
        <p>{position}</p>
      </div>
      <div>
        <h1>
          <em>SNACK BONUS useKeyPress</em>
        </h1>
        <h2>Tieni premuto "Enter" per testare il custom hook</h2>
        <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
      </div>
    </>
  );
}

export default App;
