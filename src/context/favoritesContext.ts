import { createContext } from "react"
import { CharacterContext } from "../models/character.model"

export const FavoritesContext = createContext<CharacterContext>({
  favorites: [],
  setFavorites: () => {},
})
