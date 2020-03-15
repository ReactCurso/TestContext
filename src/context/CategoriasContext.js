import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'
// Crear el context

//referencia al context
export const CategoriasContext = createContext();

// provider contiene los state y las funciones

const CategoriasProviders = props => {
  //state del context
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
      const getCategoriasAPI = async () => {

        const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
        const result = await axios.get(url);
        setCategorias(result.data.drinks);
      }
      getCategoriasAPI();
  }, [])

  return (
    <CategoriasContext.Provider value={{categorias}}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProviders;
