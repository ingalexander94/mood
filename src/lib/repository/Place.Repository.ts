import * as db from "@/lib/database/connection";
import Place from "@/lib/database/models/Place.model";
import { IPlace } from "@/interfaces/Place.interface";

const getPlaces = async (all: boolean): Promise<IPlace[]> => {
  let places: IPlace[] = [];
  try {
    await db.connect();
    places = all
      ? await Place.find()
      : await Place.find({ state: true }).select("-state");
    await db.disconnect();
  } catch (error) {
    console.error(error);
  }
  return places;
};

export const placeRepository = {
  getPlaces,
};
