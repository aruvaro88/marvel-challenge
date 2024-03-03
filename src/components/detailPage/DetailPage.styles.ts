import styled from "styled-components"

export const DetailHeaderContainer = styled.div`
  height: 320px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #333333;
`

export const ImageContainer = styled.div`
  height: 100%;
  .img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  margin-left: 64px;
  width: 35%;
  display: flex;
  flex-direction: column;
`

export const MainInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .name-text {
    font-size: 32px;
    color: white;
  }
`

export const SecondaryInfoContainer = styled.div`
  .name-text {
    color: white;
  }
`
