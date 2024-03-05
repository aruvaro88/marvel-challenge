import { useContext } from "react"
import { FavoritesContext } from "../context/favoritesContext.ts"
import { Character } from "../models/character.model.ts"

export const useFavorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  const isFavoriteCharacter = (character: Character) => !!favorites.find((elm) => elm.id === character.id)

  const addToFavorite = (character: Character) => {
    setFavorites([...favorites, character])
  }

  const removeFromFavorite = (character: Character) => {
    setFavorites(favorites.filter((elm) => elm.id !== character.id))
  }

  const toggleFavorite = (character: Character) => {
    isFavoriteCharacter(character) ? removeFromFavorite(character) : addToFavorite(character)
  }

  return { addToFavorite, removeFromFavorite, isFavoriteCharacter, toggleFavorite }
}
