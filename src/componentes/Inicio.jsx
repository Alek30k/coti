import React, { useState } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Mensaje from "./Mensaje";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Inicio() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [tasaInteres, setTasaInteres] = useState(0);
  const [total, setTotal] = useState(0);

  let componente;
  if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo} />;
  }

  return (
    <>
      <Header titulo="Cotizador de Prestamos..." />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          tasaInteres={tasaInteres}
          setTasaInteres={setTasaInteres}
          setTotal={setTotal}
        />
      </div>
      <div className="mensaje">{componente}</div>
    </>
  );
}

export default Inicio;
