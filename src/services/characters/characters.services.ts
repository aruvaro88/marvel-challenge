import { Endpoints } from "../../endpoints/endpoints"

export interface Character {
  name: string
  description: string
}

const API_BASE_URL = "http://gateway.marvel.com/"
const API_PUBLIC_KEY = "433360b1ec5781819e23e50d07d7a637"
const LIMIT = 50

export const fetchCharacters: () => Promise<Character[]> = async () => {
  try {
    const response = await fetch(API_BASE_URL + Endpoints.getCharacters + `?limit=${LIMIT}&apikey=${API_PUBLIC_KEY}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
