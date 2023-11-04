import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Historial from "./componentes/Historial";
import Inicio from "./componentes/Inicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Inicio} />
          <Route path="/historial" Component={Historial} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
