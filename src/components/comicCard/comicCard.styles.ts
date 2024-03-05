import styled from "styled-components"

export const ComicCardContainer = styled.div`
  min-width: 216px;
  margin: 16px;
`

export const ImageContainer = styled.div`
  width: 100%;
  .img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    aspect-ratio: 11/16;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
