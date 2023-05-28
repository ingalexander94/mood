import { Place } from "@/interfaces/Place.interface";
import { FilterState } from ".";
import * as formatter from "@/utils/date";

type FilterActionType =
  | {
      type: "[Filter] - SetPlace";
      payload: Place;
    }
  | {
      type: "[Filter] - SetDate";
      payload: string;
    }
  | {
      type: "[Filter] - SetHour";
      payload: string;
    }
  | {
      type: "[Filter] - SetToday";
      payload: boolean;
    }
  | {
      type: "[Filter] - SetResults";
    };

export const filterReducer = (
  state: FilterState,
  action: FilterActionType
): FilterState => {
  switch (action.type) {
    case "[Filter] - SetPlace":
      return {
        ...state,
        place: { ...action.payload },
      };
    case "[Filter] - SetDate":
      return {
        ...state,
        date: formatter.updateDate(action.payload),
      };
    case "[Filter] - SetHour":
      return {
        ...state,
        date: formatter.updateHour(state.date, action.payload),
      };
    case "[Filter] - SetToday":
      return {
        ...state,
        date: new Date(),
        current: action.payload,
      };
    case "[Filter] - SetResults":
      return {
        ...state,
        results: [1, 2, 3, 4, 5, 6],
      };
    default:
      return state;
  }
};
