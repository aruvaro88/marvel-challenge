import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EmptyHeartIcon from "../../assets/empty-heart-icon.svg?react"
import HeartIcon from "../../assets/heart-icon.svg?react"
import { useFavorites } from "../../hooks/useFavorites.ts"
import { Character } from "../../models/character.model"
import { ComicData } from "../../models/comic.model.ts"
import { fetchCharacterDetails } from "../../services/characters/characters.services"
import { fetchComicInfo } from "../../services/comics/comics.services.ts"
import { ComicSection } from "../comicsSection/ComicsSection.component.tsx"
import { DetailHeaderContainer, ImageContainer, InfoContainer, MainInfoContainer, SecondaryInfoContainer } from "./DetailPage.styles"
import "./DetailPage.styles.ts"

export const DetailPage = () => {
  const urlParams = useParams()
  const [character, setCharacter] = useState<Character>()

  const [comic, setComic] = useState<ComicData[]>()

  const { isFavoriteCharacter, toggleFavorite } = useFavorites()

  const getCharacterInfo = async (id: number) => {
    const data = await fetchCharacterDetails(id)
    setCharacter(data)
  }

  const getComicIdFromUrl = (url: string) => {
    return url.split("/").pop() || ""
  }

  const getComicInfo = async (character: Character) => {
    const comicsPromiseArray = character?.comics.items.map((elm) => {
      const comicId = getComicIdFromUrl(elm.resourceURI)
      return fetchComicInfo(comicId)
    })
    const comicsArray = await Promise.all(comicsPromiseArray)
    setComic(comicsArray)
  }

  useEffect(() => {
    urlParams.id && getCharacterInfo(parseInt(urlParams.id))
  }, [urlParams.id])

  useEffect(() => {
    character && getComicInfo(character)
  }, [character])

  return (
    <>
      {character && (
        <>
          <DetailHeaderContainer>
            <ImageContainer>
              <img className="img" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
            </ImageContainer>
            <InfoContainer>
              <MainInfoContainer>
                <span className="name-text">{character.name}</span>
                <div onClick={() => toggleFavorite(character)}>
                  {isFavoriteCharacter(character) ? <HeartIcon className="fav-icon full" /> : <EmptyHeartIcon className="fav-icon empty" />}
                </div>
              </MainInfoContainer>
              <SecondaryInfoContainer>
                {character.description === "" ? (
                  <span className="name-text">No description available for this character.</span>
                ) : (
                  <span className="name-text">{character.description}</span>
                )}
              </SecondaryInfoContainer>
            </InfoContainer>
          </DetailHeaderContainer>
          {comic && <ComicSection comics={comic} />}
        </>
      )}
    </>
  )
}
