import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { DetailPage } from "./components/detailPage/DetailPage.component.tsx"
import { HeaderWrapper } from "./components/headerWrapper/HeaderWrapper.component.tsx"
import { LandingPage } from "./components/landingPage/LandingPage.component.tsx"
import { NotFound } from "./components/notFound/NotFound.component.tsx"
import "./index.ts"
import { GlobalStyle } from "./index.ts"

const router = createBrowserRouter([
  {
    element: <HeaderWrapper />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <NotFound />,
      },
      {
        path: "/character/:id",
        element: <DetailPage />,
      },
      {
        path: "/favorites",
        element: <LandingPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
