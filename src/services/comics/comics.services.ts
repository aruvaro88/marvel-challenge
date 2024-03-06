import { ComicData } from "../../models/comic.model"

export const fetchComicInfo: (url: string) => Promise<ComicData> = async (url) => {
  try {
    const response = await fetch(url + `?ts=1&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${import.meta.env.VITE_API_HASH}`)
    const data = await response.json()
    return data.data.results[0]
  } catch (error) {
    console.log(error)
  }
}
