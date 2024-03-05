import { useEffect, useState } from "react"
import { Character } from "../../models/character.model"
import { fetchCharacters, fetchCharactersByName } from "../../services/characters/characters.services"
import { CharacterCard } from "../characterCard/CharacterCard.component"
import { CardsContainer, CharactersContainer, Input, SearchContainer } from "./LandingPage.styles"

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
      <SearchContainer>
        <Input>
          {/* <img src={Glass} className="icon" /> */}
          <input onChange={(e) => onInputChange(e)} placeholder="Search a character" className="input" />
        </Input>
        <p>{`${characters.length} Results`}</p>
      </SearchContainer>
      <CharactersContainer>
        <CardsContainer>{characters && characters.map((elm) => <CharacterCard key={elm.id} character={elm} />)}</CardsContainer>
      </CharactersContainer>
    </>
  )
}
