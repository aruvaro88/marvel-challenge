export interface ComicData {
  id: number
  digitalId: number
  title: string
  thumbnail: Thumbnail
}

interface Thumbnail {
  extension: string
  path: string
}
