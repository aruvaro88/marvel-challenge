import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/header/Header.component.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
)
