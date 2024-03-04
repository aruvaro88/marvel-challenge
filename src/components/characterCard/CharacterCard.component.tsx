import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
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
  const [favorites, setFavorites] = useState<Character[]>([])

  const toggleFavorite = () => {
    if (isFavorite === true) {
      console.log("quitar de favoritos")
      setIsFavorite(!isFavorite)
    } else {
      setFavorites([...favorites, character])
      setIsFavorite(!isFavorite)
    }
  }

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
        <Link to="/favorites">
          <button>hola</button>
        </Link>
      </InfoContainer>
    </CardContainer>
  )
}
