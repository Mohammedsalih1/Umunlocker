"use client";

import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      title: "Samsung FRP IMEI/SN WorldWide",
      price: 20,
      image: "/images/product5.jpeg",
    },
    {
      id: 2,
      title: "Honor FRP (by SN)",
      price: 28,
      image: "/images/product7.jpeg",
    },
  
    {
      id: 3,
      title: "A.N.TOOL Activation 2 Years",
      price: 20,
      image: "/images/product3.jpeg",
    },
    {
      id: 4,
      title: "UNLOCK TOOL Activation",
      price: 21,
      image: "/images/product1.jpeg",
    },
    {
      id: 5,
      title: "Mdm Remove(iTel Tecno Infinix) All Model Support",
      price: 18,
      image: "/images/product8.jpeg",
    },
    {
      id: 6,
      title: "Tsm Tool Pro",
      price: 14,
      image: "/images/product10.jpg",
    },
    {
      id: 7,
      title: "Android Multi Tool",
      price: 13,
      image: "/images/product11.jpg",
    },
      {
      id: 8,
      title: "MI account remove worldwide",
      price: 28,
      image: "/images/product4.jpeg",
    },
    {
      id: 9,
      title: "ACTIVATION starlink",
      price: 100,
      image: "/images/product6.jpeg",
    },
    {
      id: 10,
      title: "Cheetah TOOL Activation",
      price: 40,
      image: "/images/product2.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 mt-8 mb-18">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
