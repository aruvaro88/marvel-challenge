import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { DetailPage } from "./components/detailPage/DetailPage.component.tsx"
import { Header } from "./components/header/Header.component.tsx"
import { LandingPage } from "./components/landingPage/LandingPage.component.tsx"
import { NotFound } from "./components/notFound/NotFound.component.tsx"
import { FavoritesContext } from "./context/favoritesContext.ts"
import "./index.ts"
import { GlobalStyle } from "./index.ts"

const router = createBrowserRouter([
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
    element: <Favorites />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavoritesContext.Provider value={[]}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </FavoritesContext.Provider>
  </React.StrictMode>
)
