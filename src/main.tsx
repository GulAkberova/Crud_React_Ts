import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import { CrudContextProvider } from "./context/crudContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StyledEngineProvider injectFirst>
      <BrowserRouter>
      <CrudContextProvider>
      <App />
      </CrudContextProvider>
    </BrowserRouter>

  </StyledEngineProvider>
  

);
