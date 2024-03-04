import Groot from "../../assets/groot.png"
import { Container, ImageContainer } from "./NotFound.styles"

export const NotFound = () => {
  return (
    <>
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
