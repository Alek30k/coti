import { useState } from "react";
import { calcularTotal } from "../helpers";
import { useDataFetch } from "./DataFetchContext";
// import Datos from "../../datos.json";

// const data = {
//   cantidadPrestamo: [1000, 2000, 3000, 4000],
//   plazoPagar: [3, 6, 12, 24],
//   tasasInteres: [0.03, 0.05, 0.07, 0.1],
// };

import data from "../../datos.json";

const Formulario = ({
  cantidad,
  setCantidad,
  plazo,
  setPlazo,
  tasaInteres,
  setTasaInteres,
  setTotal,
}) => {
  const [error, setError] = useState(false);
  // const opciones = useDataFetch();
  const handleCantidadChange = (e) => {
    const newValue = e.target.value;
    setCantidad(newValue);
    localStorage.setItem("cantidad", newValue);
  };

  const handlePlazoChange = (e) => {
    const newValue = e.target.value;
    setPlazo(newValue);
    localStorage.setItem("plazo", newValue);
  };

  const handleTasaInteresChange = (e) => {
    const newValue = e.target.value;
    setTasaInteres(newValue);
    localStorage.setItem("tasaInteres", newValue);
  };

  const obtenerHoraActual = () => {
    const fecha = new Date();
    return fecha.toLocaleString([], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const calcularPrestamo = (e) => {
    e.preventDefault();
    if (cantidad === 0 || plazo === "" || tasaInteres === 0) {
      setError(true);
      return;
    }
    setError(false);

    const total = calcularTotal(cantidad, plazo, tasaInteres);
    setTotal(total);
    localStorage.setItem("resultado", total);
    localStorage.setItem("pago mensual", (total / plazo).toFixed(2));
  };
  const horaActual = obtenerHoraActual();
  localStorage.setItem("horaEnvioFormulario", horaActual);

  return (
    <>
      <form onSubmit={calcularPrestamo}>
        <div className="column">
          <div>
            <label>Cantidad Prestamo</label>
            <select onChange={handleCantidadChange} value={cantidad}>
              <option value="">Seleccionar</option>
              {data.cantidadPrestamo.map((valor) => (
                <option key={valor} value={valor}>
                  {valor}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Plazo para pagar</label>
            <select onChange={handlePlazoChange} value={plazo}>
              <option value="">Seleccionar</option>
              {data.plazoPagar.map((plazo) => (
                <option key={plazo} value={plazo}>
                  {plazo} meses
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Tasa de Interés</label>
            <select onChange={handleTasaInteresChange} value={tasaInteres}>
              <option value="">Seleccionar</option>
              {data.tasasInteres.map((tasa) => (
                <option key={tasa} value={tasa}>
                  {tasa * 100}% ({tasa})
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="btnSubmit">
          <input type="submit" value="Calcular" />
        </div>
      </form>
      {error ? (
        <p className="error">Todos los campos son obligatorios...</p>
      ) : (
        ""
      )}
    </>
  );
};

export default Formulario;
