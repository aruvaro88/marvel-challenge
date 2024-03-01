import { useEffect, useState } from "react"
import { Character } from "../../models/character.mode"
import { fetchCharacters } from "../../services/characters/characters.services"
import { CharacterCard } from "../characterCard/CharacterCard.component"
import "./LandingPage.styles.scss"

export const LandingPage = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  const getAllCharacters = async () => {
    setCharacters(await fetchCharacters())
  }

  useEffect(() => {
    getAllCharacters()
  }, [])

  return characters.map((elm) => <CharacterCard character={elm} />)
}
