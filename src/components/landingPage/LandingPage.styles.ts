import styled from "styled-components"
import { devices } from "../.."

export const LandingContainer = styled.div`
  padding-left: 178px;
  padding-right: 178px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media ${devices.lg} {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${devices.sm} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const SearchContainer = styled.div`
  margin: 36px 0px 36px 0px;
  padding-left: 178px;
  padding-right: 178px;
  @media ${devices.lg} {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${devices.sm} {
    padding-left: 16px;
    padding-right: 16px;
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
