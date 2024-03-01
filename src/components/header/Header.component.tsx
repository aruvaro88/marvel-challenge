import HeartIcon from "../../assets/heart-icon.svg"
import MarvelLogo from "../../assets/marvel-logo.svg"
import "./Header.styles.scss"

export const Header = () => {
  return (
    <div className="header-container">
      <div className="image-container">
        <img src={MarvelLogo} className="marvel-logo" />
      </div>
      <div className="favorites-container">
        <div className="image-container">
          <img src={HeartIcon} className="heart-icon" />
        </div>
        <p className="fav-text">3</p>
      </div>
    </div>
  )
}
