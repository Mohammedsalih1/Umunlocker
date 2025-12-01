export default function HardwarePage() {
  return (
    <div className="p-6 mt-20 mb-18">

      {/* عنوان الصفحة */}
      <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-pulse">
       قريبا خدمة مشاركة المنتجات
      </h1>

      {/* سكيلتون المنتجات */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-gray-200 rounded-xl h-40 relative overflow-hidden shadow-sm"
          >
            {/* Shimmer Animation */}
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
          </div>
        ))}
      </div>

    </div>
  );
}
