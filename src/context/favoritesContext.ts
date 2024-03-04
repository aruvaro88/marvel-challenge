import { createContext } from "react"
import { Character } from "../models/character.model"

export const FavoritesContext = createContext<Character[]>([])
