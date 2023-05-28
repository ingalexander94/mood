import { NextResponse } from "next/server";
import { ICategory } from "@/interfaces/Category.interface";
import { categoryRepository } from "@/lib/repository/Category.repository";
import { placeRepository } from "@/lib/repository/Place.Repository";
import { IPlace } from "@/interfaces/Place.interface";

export async function GET() {
  const categories: ICategory[] = await categoryRepository.getCategories(false);
  const places: IPlace[] = await placeRepository.getPlaces(false);
  return NextResponse.json({
    status: true,
    code: 200,
    message: "",
    data: { categories, places },
  });
}
