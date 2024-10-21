import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./theme";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
/**
 * This file serves as the entry point of the application.
 * It creates the root element and renders the main application component.
 * The application is wrapped in StrictMode for additional checks during development.
 * The NextUIProvider and ThemeProvider are used to provide styling and theming to the app.
 * The BrowserRouter enables routing functionality for the application.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
