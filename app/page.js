import Header from "./Components/Header";
import SearchBar from "./Components/Searchbar";
import Slider from "./Components/Slider";

export default function Home() {
  return (
    <>
    <Header />
    <SearchBar />
    <Slider images={[
          "/images/slide-1.webp",
          "/images/slide-2.webp",
          "/images/slide-3.webp",
          "/images/slide-4.webp",
        ]} />
    </>
  );
}
