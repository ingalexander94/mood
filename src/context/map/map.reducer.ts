//@ts-ignore
import { Map } from "!mapbox-gl";
import { MapState } from "./map.provider";

type MapActionType = {
  type: "[Map] - SetMap";
  payload: Map;
};

export const mapReducer = (
  state: MapState,
  action: MapActionType
): MapState => {
  switch (action.type) {
    case "[Map] - SetMap":
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };

    default:
      return state;
  }
};
