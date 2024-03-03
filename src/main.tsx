import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/header/Header.component.tsx"
import "./index.scss"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LandingPage } from "./components/landingPage/LandingPage.component.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/character/:id",
    element: <div>character</div>,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
)
