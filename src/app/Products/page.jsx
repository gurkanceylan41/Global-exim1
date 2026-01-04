// ============================================
// PRODUCTS PAGE (page.jsx) - KOPYALA YAPIŞTIR
// ============================================

"use client";

import React, { useState, useMemo } from "react";
import {
  FaSearch,
  FaBox,
  FaCookie,
  FaLayerGroup,
  FaShoppingBag,
} from "react-icons/fa";

const ProductsPage = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    // Wafer Master Rolls
    {
      name: "Kakaolu Fındık Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1215",
      weight: "27 g",
      units: "8x24",
      image: "/images/products/1215.jpg",
    },
    {
      name: "Kakaolu Fındık Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1802",
      weight: "65 g",
      units: "1x24x4",
      image: "/images/products/1802.png",
    },
    {
      name: "Kakaolu Fındık Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1220",
      weight: "240 g",
      units: "1x24",
      image: "/images/products/1802.png",
    },
    {
      name: "Kakaolu Fındık Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1390",
      weight: "280 g",
      units: "1x24",
      image: "/images/products/1390.jpg",
    },
    {
      name: "Kakaolu Fındık Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1490",
      weight: "400 g",
      units: "1x12",
      image: "/images/products/1490.jpg",
    },
    {
      name: "Çikolata Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1267",
      weight: "250 g",
      units: "1x12",
      image: "/images/products/1267.png",
    },
    {
      name: "Çikolata Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1395",
      weight: "280 g",
      units: "1x24",
      image: "/images/products/1395.webp",
    },
    {
      name: "Çikolata Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1228",
      weight: "240 g",
      units: "1x24",
      image: "/images/products/1228.jpg",
    },
    {
      name: "Vanilya Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1892",
      weight: "65 g",
      units: "1x24x4",
      image: "/images/products/1892.jpg",
    },
    {
      name: "Çilek Aromalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1882",
      weight: "65 g",
      units: "1x24x4",
      image: "/images/products/1882.jpg",
    },
    {
      name: "Cappuccino Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1872",
      weight: "65 g",
      units: "1x24x4",
      image: "/images/products/1872.webp",
    },
    {
      name: "Yer Fıstığı Kremalı Rulo Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1822",
      weight: "65 g",
      units: "1x24x4",
      image: "/images/products/1822.jpg",
    },
    {
      name: "Hindistan Cevizi Aromalı Hindistan Cevizi Parçacıklı Sütlü Çikolata Kaplamalı ",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1358",
      weight: "20 g",
      units: "1x24",
      image: "/images/products/1358.jpg",
    },
    {
      name: "Çikolata Kremalı Rulo Gofret ",
      brand: "Wafer Master",
      category: "wafer-roll",
      code: "1092",
      weight: "12 g",
      units: "12x24",
      image: "/images/products/1092.png",
    },
    {
      name: "Çikolata Kremalı Sütlü Çikolata Kaplamalı Gofret",
      brand: "Wafer Master Rolls",
      category: "wafer-roll",
      code: "1351",
      weight: "20 g",
      units: "1x24",
      image: "/images/products/1351.webp",
    },
    // Wafer Master Gofrette
    {
      name: "Çikolata Kremalı Gofret",
      brand: "Wafer Master Gofrette",
      category: "wafer",
      code: "5115",
      weight: "35 g",
      units: "6x24",
      image: "/images/products/5115.jpg",
    },
    {
      name: "Fındık Kremalı Gofret",
      brand: "Wafer Master Gofrette",
      category: "wafer",
      code: "5125",
      weight: "35 g",
      units: "6x24",
      image: "/images/products/5125.jpg",
    },
    {
      name: "Sütlü & Vanilya Kremalı Gofret",
      brand: "Wafer Master Gofrette",
      category: "wafer",
      code: "5135",
      weight: "35 g",
      units: "6x24",
      image: "/images/products/5135.png",
    },
    {
      name: "Kakao Kremalı Gofret",
      brand: "Wafer Master Gofrette",
      category: "wafer",
      code: "5145",
      weight: "35 g",
      units: "6x24",
      image: "/images/products/5145.png",
    },
    {
      name: "Çilek Kremalı Gofret",
      brand: "Wafer Master Gofrette",
      category: "wafer",
      code: "5155",
      weight: "35 g",
      units: "6x24",
      image: "/images/products/5155.png",
    },
    {
      name: "Çikolata Kremalı Gofret",
      brand: "Wafer Master Gofrette",
      category: "wafer",
      code: "5323",
      weight: "165 g",
      units: "1x24",
      image: "/images/products/5323.avif",
    },
    {
      name: "Yer Fıstığı Kremalı Gofret",
      brand: "Wafer Master Gofrette",
      category: "wafer",
      code: "5329",
      weight: "165 g",
      units: "1x24",
      image: "/images/products/5329.jpg",
    },
    // Wafer Master Cubes
    {
      name: "Fındık Kremalı Gofret",
      brand: "Wafer Master Cubes",
      category: "wafer",
      code: "5590",
      weight: "100 g",
      units: "1x36",
      image: "/images/products/5590.jpg",
    },
    {
      name: "Çikolata Kremalı Gofret",
      brand: "Wafer Master Cubes",
      category: "wafer",
      code: "5580",
      weight: "100 g",
      units: "1x36",
      image: "/images/products/5580.webp",
    },
    {
      name: "Sütlü & Vanilya Kremalı Gofret",
      brand: "Wafer Master Cubes",
      category: "wafer",
      code: "5570",
      weight: "100 g",
      units: "1x36",
      image: "/images/products/5570.webp",
    },
    {
      name: "Kakaolu Fındık Kremalı Gofret",
      brand: "Wafer Master",
      category: "wafer",
      code: "1048",
      weight: "65 g",
      units: "1x24",
      image: "/images/products/1048.jpg",
    },
    {
      name: "Çikolata Kremalı Gofret",
      brand: "Wafer Master",
      category: "wafer",
      code: "1049",
      weight: "65 g",
      units: "1x24",
      image: "/images/products/1049.jpg",
    },
    {
      name: "Çikolata Kremalı Gofret",
      brand: "Wafer Master",
      category: "wafer",
      code: "1701",
      weight: "240 g",
      units: "1x12",
      image: "/images/products/1701.webp",
    },
    {
      name: "Çikolata Kremalı Gofret",
      brand: "Wafer Master",
      category: "wafer",
      code: "1037",
      weight: "16 g",
      units: "12x24",
      image: "/images/products/1037.webp",
    },
    {
      name: "Kakaolu Fındık Kremalı Gofret",
      brand: "Wafer Master",
      category: "wafer",
      code: "1035",
      weight: "12 g",
      units: "12x24",
      image: "/images/products/1035.avif",
    },
    {
      name: "Antep Fıstığı Kremalı Sütlü Çikolalı Kaplamalı Gofret",
      brand: "Wafer Master Gofrette",
      category: "wafer",
      code: "5760",
      weight: "26 g",
      units: "6x24",
      image: "/images/products/5760.webp",
    },
    // Time Up Bisküviler
    {
      name: "Sütlü Çikolatalı Sütlü Kremalı Bisküvi",
      brand: "Time Up",
      category: "biscuit",
      code: "4010",
      weight: "30 g",
      units: "6x24",
      image: "/images/products/4010.jpg",
    },
    {
      name: "Beyaz Çikolatalı Fındık Kremalı Bisküvi",
      brand: "Time Up",
      category: "biscuit",
      code: "4200",
      weight: "30 g",
      units: "6x24",
      image: "/images/products/4200.webp",
    },
    {
      name: "Beyaz Çikolatalı Yer Fıstığı Kremalı Bisküvi",
      brand: "Time Up",
      category: "biscuit",
      code: "4220",
      weight: "30 g",
      units: "6x24",
      image: "/images/products/4220.png",
    },
    // Hayhay
    {
      name: "Kakao Kaplamalı Hindistan Cevizi Aroma Kremalı Hindistan Cevizli Bisküvi",
      brand: "Hayhay",
      category: "biscuit",
      code: "2680",
      weight: "100g g",
      units: "1x24",
      image: "/images/products/2680.png",
    },
    {
      name: "Kakao Kaplamalı Çilek Aroma Kremalı Çilekli Bisküvi",
      brand: "Hayhay",
      category: "biscuit",
      code: "2129",
      weight: "30 g",
      units: "8x24",
      image: "/images/products/2129.avif",
    },
    {
      name: "Kakao Kaplamalı Hindistan Cevizi Aroma Kremalı Hindistan Cevizli Bisküvi",
      brand: "Hayhay",
      category: "biscuit",
      code: "2158",
      weight: "30 g",
      units: "8x24",
      image: "/images/products/2158.webp",
    },
    // Heyo
    {
      name: "Kakao Kaplamalı Vanilya Kremalı Kakaolu Bisküvi",
      brand: "Heyo",
      category: "biscuit",
      code: "2355",
      weight: "30 g",
      units: "8x24",
      image: "/images/products/2355.jpg",
    },
    //Hero
    {
      name: "Çikolata Kremalı Rulo Gofret",
      brand: "Hero",
      category: "wafer-roll",
      code: "1212",
      weight: "27 g",
      units: "8x24",
      image: "/images/products/1212.jpeg",
    },
    {
      name: "Çilek Aromalı Rulo Gofret",
      brand: "Hero",
      category: "wafer-roll",
      code: "1213",
      weight: "27 g",
      units: "8x24",
      image: "/images/products/1213.png",
    },
    // dried
    {
      name: "Kuru Kayısı",
      category: "dried",
      code: "1010",
      weight: "500 g",
      units: "1 pack / carton",
      image: "/images/products/1010.png",
    },
    {
      name: "Kuru Üzüm",
      category: "dried",
      code: "1011",
      weight: "500 g",
      units: "1 pack / carton",
      image: "/images/products/1011.png",
    },
    {
      name: "Kuru İncir",
      category: "dried",
      code: "1111",
      weight: "500 g",
      units: "1 pack / carton",
      image: "/images/products/1111.png",
    },
  ];

  const getCategoryName = (category) => {
    const names = {
      "wafer-roll": "Rulo Gofret",
      wafer: "Gofret",
      biscuit: "Bisküvi",
      dried: "Doğal Kuru Meyve",
    };
    return names[category] || category;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "wafer-roll": FaLayerGroup,
      wafer: FaBox,
      biscuit: FaCookie,
      dried: FaShoppingBag,
    };
    return icons[category] || FaBox;
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        currentCategory === "all" || product.category === currentCategory;
      const matchesSearch =
        (product.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.brand || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (product.code || "").toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [currentCategory, searchTerm]);

  const categories = [
    { id: "all", label: "Tümü", icon: FaShoppingBag },
    { id: "wafer-roll", label: "Rulo Gofretler", icon: FaLayerGroup },
    { id: "wafer", label: "Gofretler", icon: FaBox },
    { id: "biscuit", label: "Bisküviler", icon: FaCookie },
    { id: "dried", label: "Doğal Kuru Meyve", icon: FaShoppingBag },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 ">
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(83, 182, 240) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#53B6F0]/15 rounded-full blur-[150px]"></div>
        <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Header - STANDARDIZED pt-32 pb-12 */}
      <div className="relative z-10 pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-md border border-[#53B6F0]/40 px-6 py-3 rounded-full shadow-lg shadow-[#53B6F0]/10 mb-6">
            <div className="w-2 h-2 bg-[#53B6F0] rounded-full animate-pulse shadow-lg shadow-[#53B6F0]/50"></div>
            <span className="text-[#53B6F0] font-semibold text-sm tracking-wider uppercase">
              Ürünlerimiz
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-[#53B6F0] to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Ürün Kataloğu
              </span>
              {/* Bu satırı sildim - ışık efekti buradan geliyordu */}
            </span>
          </h1>

          <style jsx>{`
            @keyframes gradient {
              0% {
                background-position: 0% center;
              }
              50% {
                background-position: 100% center;
              }
              100% {
                background-position: 0% center;
              }
            }

            .animate-gradient {
              background-size: 200% auto;
              animation: gradient 4s ease infinite;
            }
          `}</style>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            70'den fazla ülkeye ihracat yapan kaliteli gofret ve bisküvi
            üreticisi
          </p>
        </div>
      </div>

      {/* Filtreler */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 shadow-xl">
          <div className="relative mb-6">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#53B6F0] w-5 h-5" />
            <input
              type="text"
              className="w-full bg-slate-900/60 border border-slate-700/60 text-white placeholder-slate-400 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#53B6F0] focus:ring-2 focus:ring-[#53B6F0]/30 transition-all duration-300"
              placeholder="Ürün ara... (İsim, marka veya kod)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCategory(cat.id)}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentCategory === cat.id
                      ? "bg-gradient-to-r from-[#53B6F0] to-cyan-500 text-white shadow-lg shadow-[#53B6F0]/30"
                      : "bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white hover:shadow-lg"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ürünler Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        {filteredProducts.length === 0 ? (
          <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-12 text-center shadow-xl">
            <div className="text-slate-400 text-xl">
              Aradığınız kriterlere uygun ürün bulunamadı.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => {
              const CategoryIcon = getCategoryIcon(product.category);
              return (
                <div
                  key={index}
                  className="group bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl overflow-hidden hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-[#53B6F0]/30 hover:border-[#53B6F0]/60 hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-72 bg-white overflow-hidden p-6">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={product.image || "/images/products/default.jpg"}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x400/ffffff/53B6F0?text=Çizmeci+TIME";
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#53B6F0] to-cyan-500 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg">
                      <CategoryIcon className="w-3 h-3" />
                      {getCategoryName(product.category)}
                    </div>
                  </div>

                  <div className="p-5">
                    {product.brand && (
                      <div className="text-[#53B6F0] text-xs font-semibold mb-2 uppercase tracking-wider">
                        {product.brand}
                      </div>
                    )}
                    <h3 className="text-white font-bold text-base mb-4 line-clamp-2 group-hover:text-[#53B6F0] transition-colors duration-300">
                      {product.name}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-t border-slate-700/50">
                        <span className="text-slate-400 text-sm">Kod</span>
                        <span className="text-white font-semibold text-sm">
                          {product.code}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-t border-slate-700/50">
                        <span className="text-slate-400 text-sm">Ağırlık</span>
                        <span className="text-white font-semibold text-sm">
                          {product.weight}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-t border-slate-700/50">
                        <span className="text-slate-400 text-sm">
                          Koli/Kutu
                        </span>
                        <span className="text-white font-semibold text-sm">
                          {product.units}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
