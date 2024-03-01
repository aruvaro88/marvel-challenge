import { useEffect, useState } from "react"
import { Character, fetchCharacters } from "../../services/characters/characters.services"
import "./LandingPage.styles.scss"

export const LandingPage = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  const getAllCharacters = async () => {
    setCharacters(await fetchCharacters())
  }

  useEffect(() => {
    getAllCharacters()
    console.log(characters)
  }, [])

  return <div>Landing Page</div>
}
