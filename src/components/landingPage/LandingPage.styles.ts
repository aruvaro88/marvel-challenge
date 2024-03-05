import styled from "styled-components"
import { devices } from "../.."

export const CharactersContainer = styled.div`
  padding: 0px 178px 0px 178px;
  @media ${devices.lg} {
    padding: 0px 32px 0px 32px;
  }
  @media ${devices.sm} {
    padding: 0px 16px 0px 16px;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SearchContainer = styled.div`
  margin: 36px 0px 36px 0px;
  padding: 0px 178px 0px 178px;
  @media ${devices.lg} {
    padding: 0px 32px 0px 32px;
  }
  @media ${devices.sm} {
    padding: 0px 16px 0px 16px;
  }
`

export const Input = styled.div`
  display: flex;
  align-items: center;
  .input {
    width: 100%;
    border-bottom: 1px solid black;
    border-top: none;
    border-right: none;
    border-left: none;
    height: 24px;
    width: 100%;
  }
  .icon {
    font-size: 22px;
  }
  .input,
  .input::placeholder {
    font-size: 22px;
  }
`
