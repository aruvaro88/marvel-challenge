import { Character } from "../../models/character.mode"
import "./CharacterCard.styles.scss"

interface CharacterCardProps {
  character: Character
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div>
      <img src={character.thumbnail.path + character.thumbnail.extension} />
      <div>{character.name}</div>
    </div>
  )
}
