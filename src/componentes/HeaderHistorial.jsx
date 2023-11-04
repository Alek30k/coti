import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./HeaderHistorial.css";

function HeaderHistorial({ titulo }) {
  const [valoresLocalStorage, setValoresLocalStorage] = useState({});
  useEffect(() => {
    const cantidad = localStorage.getItem("cantidad");
    const plazo = localStorage.getItem("plazo");
    const tasaInteres = localStorage.getItem("tasaInteres");
    const resultado = localStorage.getItem("resultado");
    const pagoMensual = localStorage.getItem("pago mensual");
    const fecha = localStorage.getItem("horaEnvioFormulario");
    setValoresLocalStorage({
      cantidad,
      plazo,
      tasaInteres,
      resultado,
      pagoMensual,
      fecha,
    });
  }, []);

  return (
    <>
      <div className="header">
        <h1>{titulo}</h1>
        <div className="table-container">
          <table>
            <thead className="vertical-headers">
              <tr>
                <th>Cantidad</th>
                <th>Plazo</th>
                <th>Tasa Interes</th>
                <th>Pago Total</th>
                <th>Pago mensual</th>
                <th>Fecha de Cotización</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{valoresLocalStorage.cantidad}</td>
                <td>{valoresLocalStorage.plazo}</td>
                <td>{valoresLocalStorage.tasaInteres}</td>
                <td>{valoresLocalStorage.resultado}</td>
                <td>{valoresLocalStorage.pagoMensual}</td>
                <td>{valoresLocalStorage.fecha}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="center-link">
          <li>
            <Link to="/">Volver al Inicio</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HeaderHistorial;
