import styled from "styled-components"
import { devices } from "../.."

export const ComicsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 350px 0px 350px;
  margin-top: 32px;
  @media ${devices.lg} {
    width: 96%;
    padding: 16px;
  }
  @media ${devices.sm} {
    width: 92%;
    padding: 16px;
  }
`

export const TitleContainer = styled.div`
  margin-bottom: 24px;
  .title {
    font-size: 32px;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const ComicsContainer = styled.div`
  display: flex;
  overflow: auto;
`
