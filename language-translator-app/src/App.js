import logo from "./logo.svg";
import "./styles.css";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

function App() {
  return (
    <div className="main-container">
      <Field />
      <Languages />
      <hr />
      <Translate />
    </div>
  );
}

export default App;
