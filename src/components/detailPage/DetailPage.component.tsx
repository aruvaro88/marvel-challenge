import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EmptyHeartIcon from "../../assets/empty-heart-icon.svg"
import HeartIcon from "../../assets/heart-icon.svg"
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

  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const toggleFavorite = () => {
    if (isFavorite === true) {
      console.log("quita de favoritos")
      setIsFavorite(!isFavorite)
    } else {
      console.log("añade a favoritos")
      setIsFavorite(!isFavorite)
    }
  }

  const getCharacterInfo = async (id: number) => {
    const data = await fetchCharacterDetails(id)
    setCharacter(data)
  }

  const getComicInfo = async (character: Character) => {
    const comicsPromiseArray = character?.comics.items.map((elm) => {
      return fetchComicInfo(elm.resourceURI)
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
                <div onClick={() => toggleFavorite()}>
                  {isFavorite ? <img src={HeartIcon} className="fav-icon" /> : <img src={EmptyHeartIcon} className="fav-icon" />}
                </div>
              </MainInfoContainer>
              <SecondaryInfoContainer>
                <span className="name-text">{character.description}</span>
              </SecondaryInfoContainer>
            </InfoContainer>
          </DetailHeaderContainer>
          {comic && <ComicSection comics={comic} />}
        </>
      )}
    </>
  )
}
