import { Link } from "react-router-dom"
import HeartIcon from "../../assets/heart-icon.svg"
import MarvelLogo from "../../assets/marvel-logo.svg"
import { FavoritesContainer, HeaderContainer, ImageContainer } from "./Header.styles.ts"

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <ImageContainer className="image-container">
            <img src={MarvelLogo} className="marvel-logo" />
          </ImageContainer>
        </Link>
        <Link to="/favorites">
          <FavoritesContainer>
            <ImageContainer>
              <img src={HeartIcon} className="heart-icon" />
            </ImageContainer>
            <p className="fav-text">3</p>
          </FavoritesContainer>
        </Link>
      </HeaderContainer>
    </>
  )
}
