import Bottombar from "@/components/Bottombar/Bottombar";
import Card from "@/components/Card/Card";
import Categories from "@/components/Categories/Categories";
import Header from "@/components/Header/Header";
import { CategoryModel } from "@/models/categories.model";
import HomeStyles from "@/styles/Home.module.css";

const App = () => {
  return (
    <>
      <Header />
      <Categories
        categories={[
          CategoryModel.POPULAR,
          CategoryModel.CLOSEST,
          CategoryModel.TOP,
          CategoryModel.PROMOTIONS,
          CategoryModel.WEEK,
          CategoryModel.RECENT,
          CategoryModel.THEMATIC,
          CategoryModel.PARKING,
        ]}
      />
      <section className={HomeStyles.rooms}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
          <Card key={x} />
        ))}
      </section>
      <Bottombar />
    </>
  );
};

export default App;
