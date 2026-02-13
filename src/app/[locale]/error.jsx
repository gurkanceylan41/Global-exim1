"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Bir hata oluştu
        </h2>
        <p className="text-slate-500 mb-6">
          {error?.message || "Beklenmeyen bir hata oluştu."}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-500 transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}
