import SEO from "@/components/SEO/SEO";
import Bottombar from "@/components/Bottombar/Bottombar";
import { Metadata } from "next";
import { fetchRequest } from "@/utils/fetch";
import GlobalProvider from "@/context/global/global.provider";
import FilterProvider from "@/context/filter/filter.provider";
import { IPlace, Place } from "@/interfaces/Place.interface";
import { ICategory } from "@/interfaces/Category.interface";
import { MapProvider } from "@/context/map";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Mood | Habitaciones",
};

type Props = {
  children: React.ReactNode;
};

type InfoResponse = {
  categories: ICategory[];
  places: IPlace[];
};

async function getInfo(): Promise<InfoResponse> {
  const res = await fetchRequest("info");
  return res.data ?? {};
}

const RootLayout = async ({ children }: Props) => {
  const { categories, places } = await getInfo();

  const getDefautlPlace = (): Place | null => {
    const first = places.length ? places[0] : null;
    let place: Place | null = null;
    if (first) {
      const { name, photo, latitude, longitude } = first;
      place = { name, photo, latitude, longitude };
    }
    return place;
  };

  const place: Place | null = getDefautlPlace();

  return (
    <html lang="es">
      <SEO />
      <body>
        <GlobalProvider categories={categories} places={places}>
          <FilterProvider defaultPlace={place}>
            <MapProvider>
              <main>
                <div>{children}</div>
                <Bottombar />
              </main>
            </MapProvider>
          </FilterProvider>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
