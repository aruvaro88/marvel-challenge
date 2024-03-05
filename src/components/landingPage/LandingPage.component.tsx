import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { FavoritesContext } from "../../context/favoritesContext"
import { Character } from "../../models/character.model"
import { fetchCharacters, fetchCharactersByName } from "../../services/characters/characters.services"
import { CharacterCard } from "../characterCard/CharacterCard.component"
import { CardsContainer, CharactersContainer, Input, SearchContainer } from "./LandingPage.styles"

export const LandingPage = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const location = useLocation()

  const isFavoritePage = location.pathname.includes("/favorites")
  const { favorites } = useContext(FavoritesContext)

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
          <input onChange={(e) => onInputChange(e)} placeholder="Search a character" className="input" />
        </Input>
        <p>{`${isFavoritePage ? favorites.length : characters.length} Results`}</p>
      </SearchContainer>
      <CharactersContainer>
        {isFavoritePage ? (
          <CardsContainer>{favorites && favorites.map((elm) => <CharacterCard key={elm.id} character={elm} />)}</CardsContainer>
        ) : (
          <CardsContainer>{characters && characters.map((elm) => <CharacterCard key={elm.id} character={elm} />)}</CardsContainer>
        )}
      </CharactersContainer>
    </>
  )
}
