"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#fff",
          padding: "24px",
        }}>
          <div style={{ textAlign: "center", maxWidth: "400px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1e293b", marginBottom: "16px" }}>
              Bir hata oluştu
            </h2>
            <p style={{ color: "#64748b", marginBottom: "24px" }}>
              {error?.message || "Beklenmeyen bir hata oluştu."}
            </p>
            <button
              onClick={() => reset()}
              style={{
                padding: "12px 24px",
                background: "#059669",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
