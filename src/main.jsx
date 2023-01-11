import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/MainContext";
import { DBContextProvider } from "./context/DBContext";
import "./index.css";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <DBContextProvider>
            <ContextProvider>
                <App />
            </ContextProvider>
        </DBContextProvider>
    </React.StrictMode>
);
