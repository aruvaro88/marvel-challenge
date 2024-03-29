import { useNavigate } from "react-router-dom"
import EmptyHeartIcon from "../../assets/empty-heart-icon.svg?react"
import HeartIcon from "../../assets/heart-icon.svg?react"
import { useFavorites } from "../../hooks/useFavorites.ts"
import { Character } from "../../models/character.model"
import { CardContainer, ImageContainer, InfoContainer } from "./CharacterCard.styles"
import "./CharacterCard.styles.ts"

interface CharacterCardProps {
  character: Character
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const navigate = useNavigate()
  const { isFavoriteCharacter, toggleFavorite } = useFavorites()

  const goToDetail = () => {
    navigate(`/character/${character.id}`)
  }

  return (
    <CardContainer>
      <ImageContainer onClick={() => goToDetail()}>
        <img className="img" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
      </ImageContainer>
      <InfoContainer>
        <span className="name-text">{character.name}</span>
        <div onClick={() => toggleFavorite(character)}>
          {isFavoriteCharacter(character) ? <HeartIcon className="fav-icon full" /> : <EmptyHeartIcon className="fav-icon empty" />}
        </div>
      </InfoContainer>
    </CardContainer>
  )
}
