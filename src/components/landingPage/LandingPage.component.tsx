import { useEffect, useState } from "react"
import { Character } from "../../models/character.mode"
import { fetchCharacters } from "../../services/characters/characters.services"
import "./LandingPage.styles.scss"

export const LandingPage = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  const getAllCharacters = async () => {
    setCharacters(await fetchCharacters())
  }

  useEffect(() => {
    getAllCharacters()
    characters.length && console.log(characters)
  }, [])

  return characters.map((elm) => <div key={elm.id}>{elm.name}</div>)
}
