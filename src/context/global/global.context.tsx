import { createContext } from "react";
import { ICategory } from "@/interfaces/Category.interface";
import { IPlace } from "@/interfaces/Place.interface";

interface ContextProps {
  categories: ICategory[];
  places: IPlace[];
  indexCategory: number;
  loadCategories: (categories: ICategory[]) => void;
  loadPlaces: (places: IPlace[]) => void;
  activateCategory: (index: number) => void;
}

export const GlobalContext = createContext({} as ContextProps);
