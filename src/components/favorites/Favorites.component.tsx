import { useContext } from "react"
import { FavoritesContext } from "../../context/favoritesContext"
import { Container } from "./Favorites.styles"

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext)
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
