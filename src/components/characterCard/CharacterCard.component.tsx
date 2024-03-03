import { useState } from "react"
import { useNavigate } from "react-router-dom"
import EmptyHeartIcon from "../../assets/empty-heart-icon.svg"
import HeartIcon from "../../assets/heart-icon.svg"
import { Character } from "../../models/character.mode"
import "./CharacterCard.styles.scss"

interface CharacterCardProps {
  character: Character
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const navigate = useNavigate()

  const toggleFavorite = () => setIsFavorite(!isFavorite)

  const goToDetail = () => {
    navigate(`/character/${character.id}`)
  }

  return (
    <div className="card-container" onClick={() => goToDetail()}>
      <div className="img-container">
        <img className="img" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
      </div>
      <div className="info-container">
        <p className="name-text">{character.name}</p>
        <div className="icon-container" onClick={() => toggleFavorite()}>
          {isFavorite ? <img src={HeartIcon} className="fav-icon" /> : <img src={EmptyHeartIcon} className="fav-icon" />}
        </div>
      </div>
    </div>
  )
}
