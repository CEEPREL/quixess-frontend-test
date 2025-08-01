import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import AppWrapper from "./AppWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppWrapper>
          <App />
        </AppWrapper>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
