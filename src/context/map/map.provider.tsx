"use client";

//@ts-ignore
import mapboxgl, { Map } from "!mapbox-gl";
import { useReducer } from "react";
import { MapContext } from "./map.context";
import { mapReducer } from "./map.reducer";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleGFuZGVyLWJlbmdhbGkiLCJhIjoiY2xmaWg4czliMmNudzNxbjEyN2ZiNmdueSJ9.akD_X9IcmFEdJqF5iH5reg";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {
    dispatch({
      type: "[Map] - SetMap",
      payload: map,
    });
  };

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
