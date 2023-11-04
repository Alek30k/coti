import { createContext, useContext, useState, useEffect } from "react";

const DataFetchContext = createContext();

export const useDataFetch = () => {
  return useContext(DataFetchContext);
};

// const data = {
//   cantidadPrestamo: [1000, 2000, 3000, 4000],
//   plazoPagar: [3, 6, 12, 24],
//   tasasInteres: [0.03, 0.05, 0.07, 0.1],
// };

const DataFetchProvider = ({ children }) => {
  const [opciones, setOpciones] = useState({
    cantidadPrestamo: [],
    plazoPagar: [],
    tasasInteres: [],
  });

  useEffect(() => {
    fetch("./datos.json")
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
