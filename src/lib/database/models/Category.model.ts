import { Schema, model, models } from "mongoose";
import { ICategory } from "@/interfaces/Category.interface";

const CategorySchema: Schema<ICategory> = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
    },
    icon: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
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

CategorySchema.method("toJSON", function () {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, __v, ...category } = this.toObject();
  category.id = _id;
  return category;
});

export default models.Category || model<ICategory>("Category", CategorySchema);
