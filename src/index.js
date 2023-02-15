import React from "react";
import ReactDOM from "react-dom/client";
import AuthPage from "./pages/Auth/Auth";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider>
      <AuthPage />
    </Provider>
  </BrowserRouter>
);
