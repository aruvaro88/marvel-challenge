import styled from "styled-components"
import { colors } from "../.."

export const HeaderContainer = styled.div`
  background-color: black;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 48px 16px 48px;
  .link {
    text-decoration: none;
  }
`

export const ImageContainer = styled.div`
  .heart-icon {
    width: 32px;
    height: auto;
  }
`

export const FavoritesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .fav-text {
    margin-left: 12px;
    color: ${colors.textColor};
    font-size: 24px;
  }
`
