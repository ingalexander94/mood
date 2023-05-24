import { IPlace } from "@/interfaces/Place.interface";
import { Schema, model, models } from "mongoose";

const PlaceSchema: Schema<IPlace> = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
    },
    photo: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    state: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

PlaceSchema.method("toJSON", function () {
  const { _id, __v, ...place } = this.toObject();
  place.id = _id;
  return place;
});

export default models.Place || model<IPlace>("Place", PlaceSchema);
