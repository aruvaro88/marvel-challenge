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

export interface Comics {
  available: number
  returned: number
  collectionURI: string
  items: ComicItems[]
}

interface ComicItems {
  resourceURI: string
  name: string
}

export interface ComicData {
  id: number
  digitalId: number
  title: string
  thumbnail: Thumbnail
}

// "results": [
//       {
//         "id": "int",
//         "digitalId": "int",
//         "title": "string",
//         "issueNumber": "double",
//         "variantDescription": "string",
//         "description": "string",
//         "modified": "Date",
//         "isbn": "string",
//         "upc": "string",
//         "diamondCode": "string",
//         "ean": "string",
//         "issn": "string",
//         "format": "string",
//         "pageCount": "int",
//         "textObjects": [
//           {
//             "type": "string",
//             "language": "string",
//             "text": "string"
//           }
//         ],
//         "resourceURI": "string",
//         "urls": [
//           {
//             "type": "string",
//             "url": "string"
//           }
//         ],
//         "series": {
//           "resourceURI": "string",
//           "name": "string"
//         },
//         "variants": [
//           {
//             "resourceURI": "string",
//             "name": "string"
//           }
//         ],
//         "collections": [
//           {
//             "resourceURI": "string",
//             "name": "string"
//           }
//         ],
//         "collectedIssues": [
//           {
//             "resourceURI": "string",
//             "name": "string"
//           }
//         ],
//         "dates": [
//           {
//             "type": "string",
//             "date": "Date"
//           }
//         ],
//         "prices": [
//           {
//             "type": "string",
//             "price": "float"
//           }
//         ],
//         "thumbnail": {
//           "path": "string",
//           "extension": "string"
//         },
//         "images": [
//           {
//             "path": "string",
//             "extension": "string"
//           }
//         ],
//         "creators": {
//           "available": "int",
//           "returned": "int",
//           "collectionURI": "string",
//           "items": [
//             {
//               "resourceURI": "string",
//               "name": "string",
//               "role": "string"
//             }
//           ]
//         },
//         "characters": {
//           "available": "int",
//           "returned": "int",
//           "collectionURI": "string",
//           "items": [
//             {
//               "resourceURI": "string",
//               "name": "string",
//               "role": "string"
//             }
//           ]
//         },
//         "stories": {
//           "available": "int",
//           "returned": "int",
//           "collectionURI": "string",
//           "items": [
//             {
//               "resourceURI": "string",
//               "name": "string",
//               "type": "string"
//             }
//           ]
//         },
//         "events": {
//           "available": "int",
//           "returned": "int",
//           "collectionURI": "string",
//           "items": [
//             {
//               "resourceURI": "string",
//               "name": "string"
//             }
//           ]
//         }
//       }
//     ]

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
