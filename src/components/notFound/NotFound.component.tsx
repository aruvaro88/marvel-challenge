import Groot from "../../assets/groot.png"
import { Header } from "../header/Header.component"
import { Container, ImageContainer } from "./NotFound.styles"

export const NotFound = () => {
  return (
    <>
      <Header />
      <Container>
        <ImageContainer>
          <img className="img" src={Groot} />
        </ImageContainer>
        <h1>PAGE NOT FOUND</h1>
        <span>Please, come back to main page</span>
      </Container>
    </>
  )
}
