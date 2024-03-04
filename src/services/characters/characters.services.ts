import { Endpoints } from "../../endpoints/endpoints"
import { Character } from "../../models/character.model"

const API_BASE_URL = "http://gateway.marvel.com/"
const API_PUBLIC_KEY = "433360b1ec5781819e23e50d07d7a637"
const LIMIT = 50

export const fetchCharacters: () => Promise<Character[]> = async () => {
  try {
    const response = await fetch(API_BASE_URL + Endpoints.getCharacters + `?limit=${LIMIT}&apikey=${API_PUBLIC_KEY}`)
    const data = await response.json()
    return data.data.results
  } catch (error) {
    console.log(error)
  }
}

export const fetchCharactersByName: (name: string) => Promise<Character[]> = async (name) => {
  try {
    const response = await fetch(API_BASE_URL + Endpoints.getCharacters + `?nameStartsWith=${name}&limit=${LIMIT}&apikey=${API_PUBLIC_KEY}`)
    const data = await response.json()
    return data.data.results
  } catch (error) {
    console.log(error)
  }
}

export const fetchCharacterDetails: (id: number) => Promise<Character> = async (id) => {
  try {
    const response = await fetch(API_BASE_URL + Endpoints.getCharacterDetail.replace(":id", id.toString()) + `?apikey=${API_PUBLIC_KEY}`)
    const data = await response.json()
    return data.data.results[0]
  } catch (error) {
    console.log(error)
  }
}
