import { GlobalState } from ".";
import { ICategory } from "@/interfaces/Category.interface";
import { IPlace } from "@/interfaces/Place.interface";

type GlobalActionType =
  | {
      type: "[Global] - LoadCategories";
      payload: ICategory[];
    }
  | {
      type: "[Global] - LoadPlaces";
      payload: IPlace[];
    }
  | {
      type: "[Global] - SetIndexCategory";
      payload: number;
    };

export const globalReducer = (
  state: GlobalState,
  action: GlobalActionType
): GlobalState => {
  switch (action.type) {
    case "[Global] - LoadCategories":
      return {
        ...state,
        categories: [...action.payload],
      };
    case "[Global] - LoadPlaces":
      return {
        ...state,
        places: [...action.payload],
      };
    case "[Global] - SetIndexCategory":
      return {
        ...state,
        indexCategory: action.payload,
      };

    default:
      return state;
  }
};
