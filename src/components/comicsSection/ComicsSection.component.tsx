import { useEffect } from "react"
import { ComicData } from "../../models/comic.model.ts"
import { ComicCard } from "../comicCard/comicCard.component.tsx"
import "./ComicsSection.styles.ts"
import { ComicsContainer, ComicsSectionContainer, TitleContainer } from "./ComicsSection.styles.ts"

interface ComicsSectionProps {
  comics: ComicData[]
}

export const ComicSection = ({ comics }: ComicsSectionProps) => {
  useEffect(() => {
    console.log(comics)
  }, [])

  return (
    <ComicsSectionContainer>
      <TitleContainer>
        <span className="title">Comics</span>
      </TitleContainer>
      <ComicsContainer>{comics && comics.map((elm) => <ComicCard key={elm.id} comic={elm} />)}</ComicsContainer>
    </ComicsSectionContainer>
  )
}
