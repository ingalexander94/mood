"use client";
import { useReducer } from "react";

import { FilterContext, filterReducer } from ".";
import { Place } from "@/interfaces/Place.interface";

export interface FilterState {
  place: Place | null;
  date: Date;
  current: boolean;
  results: any[];
}

type Props = {
  children: React.ReactNode;
  defaultPlace: Place | null;
};

function FilterProvider({ children, defaultPlace }: Props) {
  const FILTER_INITIAL_STATE: FilterState = {
    place: defaultPlace,
    date: new Date(),
    current: false,
    results: [],
  };
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

  const setToday = (current: boolean) => {
    dispatch({
      type: "[Filter] - SetToday",
      payload: current,
    });
  };

  const setResults = () => {
    dispatch({
      type: "[Filter] - SetResults",
    });
  };

  const unsetResults = () => {
    dispatch({
      type: "[Filter] - UnsetResults",
    });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setPlace,
        setDate,
        setHour,
        setToday,
        setResults,
        unsetResults,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
