import styled from "styled-components"

export const CardContainer = styled.div`
  width: 192px;
  height: 248px;
  background-color: black;
  margin: 8px;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 75%;
  .img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  height: 25%;
  padding-left: 16px;
  padding-right: 16px;
  border-top: 3px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .name-text {
    color: white;
  }

  .fav-icon {
    font-size: 24px;
  }
`