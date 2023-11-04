import { createContext, useContext, useState, useEffect } from "react";

const DataFetchContext = createContext();

export const useDataFetch = () => {
  return useContext(DataFetchContext);
};

const DataFetchProvider = ({ children }) => {
  const [opciones, setOpciones] = useState({
    cantidadPrestamo: [],
    plazoPagar: [],
    tasasInteres: [],
  });

  useEffect(() => {
    fetch("cotiale.vercel.app/datos.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          "Error " +
            response.status +
            " al llamar al API: " +
            response.statusText
        );
      })
      .then((data) => setOpciones(data))
      .catch((error) => {
        console.error("Error al cargar las opciones:", error);
      });
  }, []);

  return (
    <DataFetchContext.Provider value={opciones}>
      {children}
    </DataFetchContext.Provider>
  );
};

export default DataFetchProvider;
