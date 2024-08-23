import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/home/index.tsx";
import { ApiProvider } from "./context/apiContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider>
      <Home />
    </ApiProvider>
  </StrictMode>
);
