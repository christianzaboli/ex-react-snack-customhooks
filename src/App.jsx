import "./App.css";
import useSwitch from "./customHooks/useSwitch";
import useDate from "./customHooks/useDate";
function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  return (
    <>
      <div>
        <h1>
          <strong>SNACK 1 useSwitch</strong>
        </h1>
        <h2>Il valore è: {isOn ? "ON" : "OFF"}</h2>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      <div>
        <h1>
          <strong>SNACK 2 useDate</strong>
        </h1>
        <h2>Data e ora attuali:</h2>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </>
  );
}

export default App;
