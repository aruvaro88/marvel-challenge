import styled from "styled-components"

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
  .heart-icon > svg {
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
    color: white;
    font-size: 24px;
  }
`
