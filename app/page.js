"use client";
import ProductGrid from "./Components/ProductGrid";
import SearchBar from "./Components/Searchbar";
import Slider from "./Components/Slider";

export default function Home() {
  return (
    <>
    <SearchBar />
    <Slider images={[
          "/images/slide-1.jpg",
          "/images/slide-2.jpg",
          "/images/slide-3.jpg",
          "/images/slide-4.jpg",
        ]} />
      <ProductGrid />
    </>
  );
}
