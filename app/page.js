"use client";

import Header from "./Components/Header";
import ProductGrid from "./Components/ProductGrid";
import SearchBar from "./Components/Searchbar";
import Slider from "./Components/Slider";

export default function Home() {
  return (
    <>
    <SearchBar />
    <Slider images={[
          // "/images/slide-1.webp",
          // "/images/slide-2.webp",
          // "/images/slide-3.webp",
          // "/images/slide-4.webp",
          "/images/slide-5.png",
          "/images/slide-5.png",
          "/images/slide-5.png",
        ]} />
      <ProductGrid />
    </>
  );
}
