"use client";
import { useReducer } from "react";
import { ICategory } from "@/interfaces/Category.interface";
import { IPlace } from "@/interfaces/Place.interface";
import { GlobalContext, globalReducer } from ".";

export interface GlobalState {
  categories: ICategory[];
  places: IPlace[];
  indexCategory: number;
}

type Props = {
  children: React.ReactNode;
  categories: ICategory[];
  places: IPlace[];
};

export default function GlobalProvider({
  children,
  categories,
  places,
}: Props) {
  const GLOBAL_INITIAL_STATE: GlobalState = {
    categories,
    places,
    indexCategory: 0,
  };
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_INITIAL_STATE);

  const activateCategory = (index: number) => {
    dispatch({
      type: "[Global] - SetIndexCategory",
      payload: index,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        activateCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
