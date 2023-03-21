import "./App.css";
import MyNav from "./components/TopBar";
import Links from "./components/links";
import TopSection from "./components/topSection";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const stores = [
    {
      imgUrl: "./sprouts.webp",
      storeName: "Sprouts Farmers Market",
    },
    {
      imgUrl: "./smiths.webp",
      storeName: "Smith's",
    },
    {
      imgUrl: "./albertson.png",
      storeName: "Albertsons",
    },
  ];
  return (
    <div className="App">
      <MyNav />
      <br />
      <TopSection />
      <Links stores={stores} />
    </div>
  );
}

export default App;
