import { useState } from "react"
import { useNavigate } from "react-router-dom"
import EmptyHeartIcon from "../../assets/empty-heart-icon.svg"
import HeartIcon from "../../assets/heart-icon.svg"
import { Character } from "../../models/character.model"
import { CardContainer, ImageContainer, InfoContainer } from "./CharacterCard.styles"
import "./CharacterCard.styles.ts"

interface CharacterCardProps {
  character: Character
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const navigate = useNavigate()
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const toggleFavorite = () => setIsFavorite(!isFavorite)

  const goToDetail = () => {
    navigate(`/character/${character.id}`)
  }

  return (
    <CardContainer>
      <ImageContainer onClick={() => goToDetail()}>
        <img className="img" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
      </ImageContainer>
      <InfoContainer>
        <p className="name-text">{character.name}</p>
        <div onClick={() => toggleFavorite()}>
          {isFavorite ? <img src={HeartIcon} className="fav-icon" /> : <img src={EmptyHeartIcon} className="fav-icon" />}
        </div>
      </InfoContainer>
    </CardContainer>
  )
}
