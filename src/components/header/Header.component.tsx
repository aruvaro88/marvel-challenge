import { useContext } from "react"
import { Link } from "react-router-dom"
import HeartIcon from "../../assets/heart-icon.svg"
import MarvelLogo from "../../assets/marvel-logo.svg"
import { FavoritesContext } from "../../context/favoritesContext.ts"
import { FavoritesContainer, HeaderContainer, ImageContainer } from "./Header.styles.ts"

export const Header = () => {
  const { favorites } = useContext(FavoritesContext)
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <ImageContainer className="image-container">
            <img src={MarvelLogo} className="marvel-logo" />
          </ImageContainer>
        </Link>
        <Link to="/favorites" className="link">
          <FavoritesContainer>
            <ImageContainer>
              <img src={HeartIcon} className="heart-icon" />
            </ImageContainer>
            <span className="fav-text">{favorites.length}</span>
          </FavoritesContainer>
        </Link>
      </HeaderContainer>
    </>
  )
}
