import { Document, ObjectId } from "mongoose";

export interface ICategory extends Document {
  id: ObjectId;
  name: string;
  icon: string;
  state: boolean;
  createdAt?: string;
  updatedAt?: string;
}
