import * as db from "@/lib/database/connection";
import Category from "@/lib/database/models/Category.model";
import { ICategory } from "@/interfaces/Category.interface";

const getCategories = async (all: boolean): Promise<ICategory[]> => {
  let categories: ICategory[] = [];
  try {
    await db.connect();
    categories = all
      ? await Category.find()
      : await Category.find({ state: true }).select("-state");
    console.log("categorias ", categories);

    await db.disconnect();
  } catch (error) {
    console.error("el errror es: ", error);
  }
  return categories;
};

export const categoryRepository = {
  getCategories,
};
