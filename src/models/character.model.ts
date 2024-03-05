export interface Character {
  id: number
  name: string
  description: string
  modified: string
  resourceURI: string
  urls: Urls[]
  thumbnail: Thumbnail
  comics: Comics
  stories: Stories
  events: Events
  series: Series
}

interface Urls {
  type: string
  url: string
}

interface Thumbnail {
  extension: string
  path: string
}

interface Comics {
  available: number
  returned: number
  collectionURI: string
  items: ComicItems[]
}

interface ComicItems {
  resourceURI: string
  name: string
}

interface Stories {
  available: number
  returned: number
  collectionURI: string
  items: StoriesItems[]
}

interface StoriesItems {
  resourceURI: string
  name: string
  type: string
}

interface Events {
  available: number
  returned: number
  collectionURI: string
  items: EventsItems[]
}

interface EventsItems {
  resourceURI: string
  name: string
}

interface Series {
  available: number
  returned: number
  collectionURI: string
  items: SeriesItems[]
}

interface SeriesItems {
  resourceURI: string
  name: string
}

export interface CharacterContext {
  favorites: Character[]
  setFavorites: (character: Character[]) => void
}
