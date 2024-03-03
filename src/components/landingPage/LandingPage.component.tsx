import { useEffect, useState } from "react"
import { Character } from "../../models/character.model"
import { fetchCharacters, fetchCharactersByName } from "../../services/characters/characters.services"
import { CharacterCard } from "../characterCard/CharacterCard.component"
import { Input, LandingContainer } from "./LandingPage.styles"

export const LandingPage = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  const getAllCharacters = async () => {
    setCharacters(await fetchCharacters())
  }

  const getCharactersByName = async (name: string) => {
    setCharacters(await fetchCharactersByName(name))
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.target.value === "" ? getAllCharacters() : getCharactersByName(e.target.value)
  }

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <>
      <LandingContainer>
        <Input>
          <input onChange={(e) => onInputChange(e)} placeholder="Search a character" />
        </Input>
        {characters && characters.map((elm) => <CharacterCard key={elm.id} character={elm} />)}
      </LandingContainer>
    </>
  )
}
