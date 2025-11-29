"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)}
      className="rounded-lg border text-[#1d2530] shadow-sm overflow-hidden transition-all
      duration-300 hover:shadow-card-hover hover:-translate-y-1 border-[#d9e0e8] bg-[#ffffff] cursor-pointer"
    >
      <div className="aspect-4/3 overflow-hidden bg-[#ebf0f4] ">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className="w-full h-full transition-transform duration-300 hover:scale-110"
          />
        </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-[#1d2530]">{product.title}</h3>
        <p className="text-2xl font-bold text-[#1183d4]">${product.price}</p>
      </div>
    </div>
  );
}
