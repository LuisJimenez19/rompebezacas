import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/MainContext";
import "./index.css";
const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);
