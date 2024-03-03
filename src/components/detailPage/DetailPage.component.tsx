import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EmptyHeartIcon from "../../assets/empty-heart-icon.svg"
import HeartIcon from "../../assets/heart-icon.svg"
import { Character } from "../../models/character.model"
import { fetchCharacterDetails } from "../../services/characters/characters.services"
import { DetailHeaderContainer, ImageContainer, InfoContainer, MainInfoContainer, SecondaryInfoContainer } from "./DetailPage.styles"
import "./DetailPage.styles.ts"

export const DetailPage = () => {
  const urlParams = useParams()
  const [character, setCharacter] = useState<Character>()
  //   const [comic, setComic] = useState<[]>()

  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const toggleFavorite = () => setIsFavorite(!isFavorite)

  const getCharacterInfo = async (id: number) => {
    setCharacter(await fetchCharacterDetails(id))
  }

  //   const getComicInfo = async () => {
  //     character?.comics.items.map((elm) => {
  //       console.log(fetchComicInfo(elm.resourceURI))
  //     })
  //   }

  useEffect(() => {
    urlParams.id && getCharacterInfo(parseInt(urlParams.id))
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
        //   <ComicsContainer>
        //           {}
        //   </ComicsContainer>
      )}
    </>
  )
}
