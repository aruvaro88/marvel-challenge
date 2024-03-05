import { render } from "@testing-library/react"
import { Header } from "./Header.component"

test("renders Header component correctly", () => {
  const { queryByText } = render(<Header />)

  // Verifica que el componente se renderice correctamente
  const linkElement = queryByText(/Marvel Logo/i)

  expect(linkElement).toBeTruthy()
})
