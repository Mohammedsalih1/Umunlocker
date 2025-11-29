"use client";

import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 49,
      image: "/images/product1.jpeg",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 79,
      image: "/images/product2.jpeg",
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: 39,
      image: "/images/product3.jpeg",
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: 29,
      image: "/images/product4.jpeg",
    },
    {
      id: 5,
      title: "Gaming Mouse",
      price: 29,
      image: "/images/product5.jpeg",
    },
    {
      id: 6,
      title: "Gaming Mouse",
      price: 29,
      image: "/images/product6.jpeg",
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
