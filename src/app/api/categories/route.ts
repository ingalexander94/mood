import { NextResponse } from "next/server";
import { ICategory } from "@/interfaces/Category.interface";
import { categoryRepository } from "@/lib/repository/Category.repository";

export async function GET(_: Request) {
  const categories: ICategory[] = await categoryRepository.getCategories(false);
  return NextResponse.json({
    status: true,
    code: 200,
    message: "",
    data: categories,
  });
}
