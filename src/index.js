import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextPrvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextPrvider>
      <App />
    </AuthContextPrvider>
  </React.StrictMode>,
  document.getElementById("root")
);
