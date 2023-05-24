import { IPlace } from "@/interfaces/Place.interface";
import { fetchRequest } from "@/utils/fetch";
import FormReserve from "@/components/FormReserve/FormReserve";

async function getPlaces(): Promise<IPlace[]> {
  const res = await fetchRequest(process.env.API_URL || "", "places");
  return res.data ?? [];
}

const Reserve = async () => {
  const places: IPlace[] = await getPlaces();

  return <FormReserve places={places} />;
};

export default Reserve;
