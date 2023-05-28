import { NextResponse } from "next/server";
import { IPlace } from "@/interfaces/Place.interface";
import { placeRepository } from "@/lib/repository/Place.Repository";

export async function GET() {
  const places: IPlace[] = await placeRepository.getPlaces(false);
  return NextResponse.json({
    status: true,
    code: 200,
    message: "",
    data: places,
  });
}
