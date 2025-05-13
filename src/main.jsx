import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth } from "./Components/Auth/Auth.jsx";

const Root = () => {
  return (
    <StrictMode>
      <Auth>
        <App />
      </Auth>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
