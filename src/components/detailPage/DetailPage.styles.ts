import styled from "styled-components"
import { devices } from "../.."

export const DetailHeaderContainer = styled.div`
  height: 320px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #333333;
  @media ${devices.lg} {
    justify-content: space-between;
  }
  @media ${devices.sm} {
    height: auto;
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  height: 100%;
  .img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  @media ${devices.lg} {
    width: 43%;
  }
  @media ${devices.sm} {
    width: 100%;
  }
`

export const InfoContainer = styled.div`
  margin-left: 64px;
  width: 35%;
  display: flex;
  flex-direction: column;
  @media ${devices.lg} {
    margin: 0;
    width: 60%;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media ${devices.sm} {
    width: 90%;
    margin: 0;
    padding: 16px;
  }
`

export const MainInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  .name-text {
    font-size: 32px;
    color: white;
  }
`

export const SecondaryInfoContainer = styled.div`
  .name-text {
    color: white;
    font-size: 16px;
  }
`
