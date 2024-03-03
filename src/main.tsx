import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { DetailPage } from "./components/detailPage/DetailPage.component.tsx"
import { Header } from "./components/header/Header.component.tsx"
import { LandingPage } from "./components/landingPage/LandingPage.component.tsx"
import "./index.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/character/:id",
    element: <DetailPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
)
