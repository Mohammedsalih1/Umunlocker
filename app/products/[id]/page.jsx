"use client";
import { use } from "react";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Samsung FRP IMEI/SN WorldWide Android 11-12-13-14 Only",
    price: 20,
    // image: "/images/product1.jpeg",
    description: "High-quality sound with noise cancellation.",
    time: "الوقت: 1-15 دقيقة",
    worning: "يجب التأكد من IMEI او SN قبل الارسال نحن غير مسؤولين عن اي خطأ في الرقم التسلسلي."
  },
  {
    id: 2,
      title: "Honor FRP (by SN)",
      price: 28,
    // image: "/images/product2.jpeg",
    description: "Track fitness, receive notifications, and more.",
    time: "الوقت: 1-12 ساعة",
    worning: "يجب التأكد من IMEI او SN قبل الارسال نحن غير مسؤولين عن اي خطأ في الرقم التسلسلي."
  },
  {
    id: 3,
      title: "A.N.TOOL Activation 2 Years",
      price: 20,
    // image: "/images/product3.jpeg",
    description: "Portable speaker with rich and deep audio.",
    time: "الوقت: 30-60 دقيقة",
    worning: "يجب التأكد من تسجيل الدخول في موقع الاداة قبل ارسال الايميل واسم المستخدم."
  },
  {
    id: 4,
      title: "UNLOCK TOOL Activation",
      price: 21,
    // image: "/images/product4.jpeg",
    description: "Ergonomic design with customizable RGB lights.",
    time: "الوقت: 30-120 دقيقة",
    worning: "يجب التأكد من تسجيل الدخول في موقع الاداة قبل ارسال الايميل واسم المستخدم."
  },
  {
    id: 5,
      title: "Mdm Remove(iTel Tecno Infinix) All Model Support",
      price: 18,
    // image: "/images/product5.jpeg",
    description: "Ergonomic design with customizable RGB lights.",
    time: "الوقت: 48 ساعة",
    worning: "يجب التأكد من IMEI او SN قبل الارسال نحن غير مسؤولين عن اي خطأ في الرقم التسلسلي."
  },
  {
    id: 6,
      title: "Tsm Tool Pro",
      price: 100,
    // image: "/images/product6.jpeg",
    description: "Ergonomic design with customizable RGB lights.",
    time: "الوقت: 10-60 دقيقة",
    worning: "يجب التأكد من تسجيل الدخول في موقع الاداة قبل ارسال الايميل واسم المستخدم."
  },
  {
    id: 7,
      title: "Activation Android Multi Tool",
      price: 40,
    // image: "/images/product6.jpeg",
    description: "Ergonomic design with customizable RGB lights.",
    time: "الوقت: 1-15 دقيقة",
    worning: "يجب التأكد من تسجيل الدخول في موقع الاداة قبل ارسال الايميل واسم المستخدم."
  },
  {
    id: 8,
      title: "MI account remove worldwide",
      price: 28,
    // image: "/images/product6.jpeg",
    description: "Ergonomic design with customizable RGB lights.",
    time: "الوقت: 24-48 ساعة",
    worning: "يجب التأكد من IMEI او SN قبل الارسال نحن غير مسؤولين عن اي خطأ في الرقم التسلسلي."
  },
  {
    id: 9,
      title: "Tsm Tool Pro",
      price: 14,
    // image: "/images/product6.jpeg",
    description: "Ergonomic design with customizable RGB lights.",
    time: "الوقت: 1-15 دقيقة",
    worning: "يجب التأكد من تسجيل الدخول في موقع الاداة قبل ارسال الايميل واسم المستخدم."
  },
  {
    id: 10,
      title: "Android Multi Tool",
      price: 13,
    // image: "/images/product6.jpeg",
    description: "Ergonomic design with customizable RGB lights.",
    time: "الوقت: 15-45 دقيقة",
    worning: "يجب التأكد من تسجيل الدخول في موقع الاداة قبل ارسال الايميل واسم المستخدم."
  },
];

export default function ProductPage({ params }) {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [imei, setImei] = useState("");

  const handleWhatsApp = () => {
    const phone = "23676057518"; // <-- put your number here (no +)
      const message = isImeiProduct
        ? `طلب جديد\n\nIMEI / SN: ${imei}\n\nالمنتج: ${product.title}`
        : `طلب جديد\n\nالاسم: ${username}\nالإيميل: ${email}\n\nأرغب في طلب المنتج: ${product.title}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const { id } = use(params);    // <-- CORRECT for Next.js 15

  const product = products.find((p) => p.id == id);
    const imeiProducts = [1, 2, 5, 8];
  const isImeiProduct = imeiProducts.includes(Number(product.id));

  if (!product) {
    return <div className="p-6 text-red-500">Product not found.</div>;
  }

  return (
    <div className="p-6 mt-20 flex flex-col md:flex-row gap-6 mb-18">
       {/* Conditional Inputs */}
      <div className="mt-6 flex flex-col gap-4">
      <div className="bg-[#eee] p-4 rounded-2xl">
        <h2 className="text-left mb-8">{product.title}</h2>
        <p className="text-white bg-[#1183d4] w-fit py-1 px-2 rounded-2xl">{product.time}</p>
      </div>
        {isImeiProduct ? (
          // INPUT FOR IMEI / SN
          <input
            type="text"
            placeholder="ادخل رمز IMEI او SN"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <>
            {/* USERNAME */}
            <input
              type="text"
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="الإيميل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </>
        )}
      </div>
      {/* <div className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="imei & sn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="الإيميل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="hidden w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div> */}
      {/* <Image
        src={product.image}
        width={500}
        height={400}
        alt={product.title}
        className="rounded"
      /> */}
      <div className="text-center md:text-right">
        <p className="text-[1.1rem] text-red-500 text-right font-bold">تنبيه هام!</p>
        <h1 className="text-2xl font-bold mt-4 text-right">{product.worning}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <div className="mt-4 text-2xl font-bold text-[#1183d4]">${product.price}</div>
        <button 
        onClick={handleWhatsApp}
          // href="https://wa.me/23676057518"
          // target="_blank"
          // rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 cursor-pointer bg-[#1183d4] hover:bg-green-700 text-white px-5 py-3 rounded-xl text-lg font-semibold transition shadow-md"
          >
            الطلب عبر
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.56 0 .3 5.26.3 11.74c0 2.07.54 4.1 1.57 5.92L0 24l6.51-1.7a12.03 12.03 0 0 0 5.53 1.36h.01c6.49 0 11.75-5.26 11.75-11.74 0-3.14-1.22-6.1-3.28-8.14zM12.05 21.6a9.85 9.85 0 0 1-4.98-1.36l-.36-.21-3.86 1.01 1.03-3.76-.24-.38a9.8 9.8 0 0 1-1.53-5.17c0-5.43 4.42-9.85 9.94-9.85 2.65 0 5.14 1.03 7.02 2.9a9.78 9.78 0 0 1 2.92 6.94c0 5.43-4.42 9.86-9.94 9.86zm5.49-7.37c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.14.3-.36.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.94-2.25-.25-.6-.5-.52-.68-.53-.18-.01-.38-.01-.58-.01a1.12 1.12 0 0 0-.82.38c-.28.3-1.08 1.06-1.08 2.58 0 1.52 1.1 2.99 1.26 3.2.16.21 2.16 3.44 5.32 4.81.74.32 1.32.5 1.77.64.74.23 1.4.2 1.92.12.59-.09 1.79-.73 2.04-1.44.25-.71.25-1.33.18-1.46-.07-.13-.27-.2-.57-.35z" />
          </svg>
        </button>

      </div>
    </div>
  );
}
