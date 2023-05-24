import { useReducer } from "react";
import { ICategory } from "@/interfaces/Category.interface";
import { IPlace } from "@/interfaces/Place.interface";
import { GlobalContext, globalReducer } from ".";

export interface GlobalState {
  categories: ICategory[];
  places: IPlace[];
  indexCategory: number;
}

const GLOBAL_INITIAL_STATE: GlobalState = {
  categories: [],
  places: [],
  indexCategory: 0,
};

type Props = {
  children: React.ReactNode;
};

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_INITIAL_STATE);

  const loadCategories = (categories: ICategory[]) => {
    dispatch({
      type: "[Global] - LoadCategories",
      payload: categories,
    });
  };

  const loadPlaces = (places: IPlace[]) => {
    dispatch({
      type: "[Global] - LoadPlaces",
      payload: places,
    });
  };

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
        loadCategories,
        loadPlaces,
        activateCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
