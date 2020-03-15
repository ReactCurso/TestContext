import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [filtro, setFiltro] = useState({
    ingrediente: '',
    categoria: ''
  });
  const { categorias } = useContext(CategoriasContext);
  const { setBusqueda } = useContext(RecetasContext);
  const [error, setError] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    if (filtro.ingrediente === '' || filtro.categoria === '') {
      setError(true);
      return;
    }
    setError(false);
    setBusqueda(filtro);
  };

  const onChange = e => {
    setFiltro({
      ...filtro,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="col-12" onSubmit={onSubmit}>
      <fieldset className="text-center">
        <legend>Busca bebidas por caregoria o ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="ingrediente"
            className="form-control"
            type="text"
            placeholder="Buscar por ingredientes"
            onChange={onChange}
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="categoria" onChange={onChange}>
            <option value="">seleccionar</option>
            {categorias.map(categoria => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            value="Buscar"
            className="btn btn-block btn-primary"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
