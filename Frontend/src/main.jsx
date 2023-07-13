import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PlaylistContextProvider from "./components/UseContext/PlaylistContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <PlaylistContextProvider>
      <App />
    </PlaylistContextProvider>
  // </React.StrictMode>
);
