import styled from "styled-components"
import { devices } from "../.."

export const CardContainer = styled.div`
  width: 192px;
  height: 248px;
  background-color: black;
  margin: 8px;
  display: flex;
  flex-direction: column;
  :hover {
    background-color: red;
  }
  @media ${devices.lg} {
    width: 165px;
    height: 220px;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 75%;
  .img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 3px solid red;
  flex-grow: 1;
  .name-text {
    color: white;
    font-size: 14px;
  }

  .fav-icon {
    font-size: 24px;
  }
`
