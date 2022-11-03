import "./App.css";

import ContadorHooks from "./Components/ContadorHooks";
import ScrollHooks from "./Components/ScrollHooks";
import RelojHooks from "./Components/RelojHooks";
import AjaxHooks from "./Components/AjaxHooks";
import HooksPersonalizados from "./Components/HooksPersonalizados";
import Referencias from "./Components/Referencias";
import Formularios from "./Components/Formularios";
import Estilos from "./Components/Estilos";

function App() {
  return (
    <div className="App">
      <ContadorHooks titulo="tiempo" />
      <hr />
      <ScrollHooks />
      <hr />
      <RelojHooks />
      <hr />
      <AjaxHooks />
      <hr />
      <HooksPersonalizados />
      <hr />
      <Referencias />
      <hr />
      <Formularios />
      <hr />
      <Estilos />
    </div>
  );
}

export default App;
