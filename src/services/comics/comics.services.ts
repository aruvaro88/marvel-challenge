import { Endpoints } from "../../endpoints/endpoints"
import { ComicData } from "../../models/comic.model"

export const fetchComicInfo: (comicId: string) => Promise<ComicData> = async (comicId) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_BASE_URL +
        Endpoints.getComicInfo.replace(":comicId", comicId) +
        `?ts=1&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${import.meta.env.VITE_API_HASH}`
    )
    const data = await response.json()
    return data.data.results[0]
  } catch (error) {
    console.log(error)
  }
}
