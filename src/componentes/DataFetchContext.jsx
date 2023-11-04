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
    fetch("../../datos.json")
      .then((response) => response.json())
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
