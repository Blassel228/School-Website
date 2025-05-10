import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {GlobalStyles} from "./Styles/global-styles.tsx";
import {BrowserRouter} from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter >
    <GlobalStyles />
    <App />
  </BrowserRouter>
);
