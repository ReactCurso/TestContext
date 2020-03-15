import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = props => {
  
  const [busqueda, setBusqueda] = useState({
    ingrediente: "",
    categoria: ""
  });

  const [recetas, setRecetas] = useState([]);
  const {ingrediente, categoria} = busqueda;

  useEffect(() => {
    const consultarAPI = async() => {
      
      if(ingrediente === '' || categoria === '') return;
      const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
      const resultado = await axios.get(url);
      setRecetas(resultado.data.drinks);
    }
    consultarAPI();
    // eslint-disable-next-line 
  }, [busqueda])
  
  return (
    <RecetasContext.Provider 
      value={{recetas, setBusqueda}}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
