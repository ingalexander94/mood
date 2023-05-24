import BarScroll from "@/components/BarScroll/BarScroll";
import Bottombar from "@/components/Bottombar/Bottombar";
import Card from "@/components/Card/Card";
import { Metadata } from "next";
import Categories from "@/components/Categories/Categories";
import Header from "@/components/Header/Header";
import Map from "@/components/Map/Map";
import { ICategory } from "@/interfaces/Category.interface";
import HomeStyles from "@/styles/Home.module.css";
import { fetchRequest } from "@/utils/fetch";

export const metadata: Metadata = {
  title: "Mood | Habitaciones",
};

async function getCategories(): Promise<ICategory[]> {
  const res = await fetchRequest(process.env.API_URL || "", "categories");
  return res.data ?? [];
}

const App = async () => {
  const categories: ICategory[] = await getCategories();

  return (
    <>
      <Header />
      <div className={HomeStyles.container}>
        <Map />
        <div className={HomeStyles.wrapper}>
          {/* <div> */}
          <BarScroll />
          <Categories categories={categories} />
          <section className={HomeStyles.rooms}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
              <Card multiple={true} showInfo={true} key={x} />
            ))}
          </section>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default App;
