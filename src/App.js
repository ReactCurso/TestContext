import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaRecetas from "./components/ListaRecetas";
import CategoriaProviders from "./context/CategoriasContext";
import RecetasProviders from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";
function App() {
  return (
    <CategoriaProviders>
      <RecetasProviders>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProviders>
    </CategoriaProviders>
  );
}

export default App;
