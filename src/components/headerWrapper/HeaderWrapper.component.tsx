import { useState } from "react"
import { Outlet } from "react-router-dom"
import { FavoritesContext } from "../../context/favoritesContext"
import { Character } from "../../models/character.model"
import { Header } from "../header/Header.component"

export const HeaderWrapper = () => {
  const [favorites, setFavorites] = useState<Character[]>([])

  return (
    <div>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <Header />
        {<Outlet />}
      </FavoritesContext.Provider>
    </div>
  )
}
