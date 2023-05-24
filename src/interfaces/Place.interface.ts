import { Document, ObjectId } from "mongoose";

export interface IPlace extends Document {
  id?: ObjectId;
  name: string;
  photo: string;
  latitude: number;
  longitude: number;
  state?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Place {
  name: string;
  photo: string;
  latitude: number;
  longitude: number;
}
