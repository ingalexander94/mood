import Bottombar from "@/components/Bottombar/Bottombar";
import Header from "@/components/Header/Header";
import Rooms from "@/components/Rooms/Rooms";

const App = async () => {
  return (
    <>
      <Header />
      <Rooms />
      <Bottombar />
    </>
  );
};

export default App;
