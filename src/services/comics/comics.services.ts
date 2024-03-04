import { ComicData } from "../../models/comic.model"

const API_PUBLIC_KEY = "433360b1ec5781819e23e50d07d7a637"

export const fetchComicInfo: (url: string) => Promise<ComicData> = async (url) => {
  try {
    const response = await fetch(url + `?apikey=${API_PUBLIC_KEY}`)
    const data = await response.json()
    return data.data.results[0]
  } catch (error) {
    console.log(error)
  }
}
