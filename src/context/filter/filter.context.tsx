import { createContext } from "react";
import { Place } from "@/interfaces/Place.interface";

interface ContextProps {
  place: Place | null;
  date: Date;
  current: boolean;
  rooms: any[];
  setPlace: (place: Place) => void;
  setDate: (date: string) => void;
  setHour: (hour: string) => void;
}

export const FilterContext = createContext({} as ContextProps);
