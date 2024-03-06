import { Endpoints } from "../../endpoints/endpoints"
import { Character } from "../../models/character.model"

const LIMIT = 50

export const fetchCharacters: () => Promise<Character[]> = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_BASE_URL +
        Endpoints.getCharacters +
        `?limit=${LIMIT}&ts=1&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${import.meta.env.VITE_API_HASH}`
    )
    const data = await response.json()
    return data.data.results
  } catch (error) {
    console.log(error)
  }
}

export const fetchCharactersByName: (name: string) => Promise<Character[]> = async (name) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_BASE_URL +
        Endpoints.getCharacters +
        `?nameStartsWith=${name}&limit=${LIMIT}&ts=1&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${import.meta.env.VITE_API_HASH}`
    )
    const data = await response.json()
    return data.data.results
  } catch (error) {
    console.log(error)
  }
}

export const fetchCharacterDetails: (id: number) => Promise<Character> = async (id) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_BASE_URL +
        Endpoints.getCharacterDetail.replace(":id", id.toString()) +
        `?ts=1&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${import.meta.env.VITE_API_HASH}`
    )
    const data = await response.json()
    return data.data.results[0]
  } catch (error) {
    console.log(error)
  }
}
