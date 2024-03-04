import { useEffect } from "react"
import { ComicData } from "../../models/comic.model.ts"
import "./comicCard.styles.ts"
import { ComicCardContainer, ImageContainer, TitleContainer } from "./comicCard.styles.ts"

interface ComicCardProps {
  comic: ComicData
}

export const ComicCard = ({ comic }: ComicCardProps) => {
  useEffect(() => {
    console.log(comic)
  }, [])

  return (
    <ComicCardContainer>
      <ImageContainer>
        <img className="img" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
      </ImageContainer>
      <TitleContainer>
        <span>{comic.title}</span>
      </TitleContainer>
    </ComicCardContainer>
  )
}
