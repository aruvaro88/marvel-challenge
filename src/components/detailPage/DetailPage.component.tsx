import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EmptyHeartIcon from "../../assets/empty-heart-icon.svg"
import HeartIcon from "../../assets/heart-icon.svg"
import { Character, ComicData } from "../../models/character.model"
import { fetchCharacterDetails, fetchComicInfo } from "../../services/characters/characters.services"
import { DetailHeaderContainer, ImageContainer, InfoContainer, MainInfoContainer, SecondaryInfoContainer } from "./DetailPage.styles"
import "./DetailPage.styles.ts"

export const DetailPage = () => {
  const urlParams = useParams()
  const [character, setCharacter] = useState<Character>()
  const comicsArray: ComicData[] = []
  const [comic, setComic] = useState<ComicData[]>()

  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const toggleFavorite = () => setIsFavorite(!isFavorite)

  const getCharacterInfo = async (id: number) => {
    setCharacter(await fetchCharacterDetails(id))
  }

  const getComicInfo = async (character: Character) => {
    character?.comics.items.map(async (elm) => {
      comicsArray.push(await fetchComicInfo(elm.resourceURI))
    })
    setComic(comicsArray)
  }

  useEffect(() => {
    urlParams.id && getCharacterInfo(parseInt(urlParams.id))
    character && getComicInfo(character)
    console.log(comic)
  }, [urlParams.id])

  //   useEffect(() => {
  //     character && getComicInfo()
  //   }, [character, getComicInfo])

  return (
    <>
      {character && (
        <DetailHeaderContainer>
          <ImageContainer>
            <img className="img" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
          </ImageContainer>
          <InfoContainer>
            <MainInfoContainer>
              <p className="name-text">{character.name}</p>
              <div onClick={() => toggleFavorite()}>
                {isFavorite ? <img src={HeartIcon} className="fav-icon" /> : <img src={EmptyHeartIcon} className="fav-icon" />}
              </div>
            </MainInfoContainer>
            <SecondaryInfoContainer>
              <p className="name-text">{character.description}</p>
            </SecondaryInfoContainer>
          </InfoContainer>
        </DetailHeaderContainer>
      )}
      <div>{comic && comic.map((elm) => <h1 key={elm.id}>{elm.title}</h1>)}</div>
    </>
  )
}
