import { products } from "../data/productsData";
import ProductsClient from "../components/products/ProductsClient";

export const metadata = {
  title: "Urunler - Global Exim",
  description: "Global Exim urun katalogu. Gofret, biskuvi ve dogal kuru meyve cesitlerimizi kesfedin. 70+ ulkeye ihracat.",
  keywords: "gofret, biskuvi, kuru meyve, Wafer Master, ihracat urunleri, Global Exim",
};

export default function ProductsPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(83, 182, 240) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#53B6F0]/15 rounded-full blur-[150px]" />
        <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-md border border-[#53B6F0]/40 px-6 py-3 rounded-full shadow-lg shadow-[#53B6F0]/10 mb-6">
            <div className="w-2 h-2 bg-[#53B6F0] rounded-full animate-pulse shadow-lg shadow-[#53B6F0]/50" />
            <span className="text-[#53B6F0] font-semibold text-sm tracking-wider uppercase">
              Urunlerimiz
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-[#53B6F0] to-white bg-clip-text text-transparent">
              Urun Katalogu
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            70'den fazla ulkeye ihracat yapan kaliteli gofret ve biskuvi ureticisi
          </p>
        </div>
      </header>

      {/* Interactive Client Component */}
      <ProductsClient products={products} />
    </div>
  );
}
