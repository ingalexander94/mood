import { useReducer } from "react";

import { FilterContext, filterReducer } from ".";
import { Place } from "@/interfaces/Place.interface";

export interface FilterState {
  place: Place | null;
  date: Date;
  current: boolean;
  rooms: any[];
}

const FILTER_INITIAL_STATE: FilterState = {
  place: null,
  date: new Date(),
  current: false,
  rooms: [],
};

type Props = {
  children: React.ReactNode;
};

export const FilterProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(filterReducer, FILTER_INITIAL_STATE);

  const setPlace = (place: Place) => {
    dispatch({
      type: "[Filter] - SetPlace",
      payload: place,
    });
  };

  const setDate = (date: string) => {
    dispatch({
      type: "[Filter] - SetDate",
      payload: date,
    });
  };

  const setHour = (hour: string) => {
    dispatch({
      type: "[Filter] - SetHour",
      payload: hour,
    });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setPlace,
        setDate,
        setHour,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
