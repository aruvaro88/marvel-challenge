import { useContext } from "react"
import { FavoritesContext } from "../../context/favoritesContext"
import { Character } from "../../models/character.model"
import { Container } from "./NotFound.styles"

export const NotFound = () => {
  const favorites: Character[] = useContext(FavoritesContext)
  return (
    <>
      <Container>
        {favorites.map((elm) => (
          <h1>{elm.name}</h1>
        ))}
      </Container>
    </>
  )
}
