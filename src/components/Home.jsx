export function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: "$89",
      image: "🎧",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$129",
      image: "⌚",
    },
    {
      id: 3,
      name: "Professional Gaming Mouse",
      price: "$49",
      image: "🖱️",
    },
    {
      id: 4,
      name: "Premium Laptop Backpack",
      price: "$59",
      image: "🎒",
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      price: "$79",
      image: "🔊",
    },
    {
      id: 6,
      name: "Latest Generation Smartphone",
      price: "$499",
      image: "📱",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 35%, #312e81 70%, #4f46e5 100%)",
          padding: "80px 20px",
          display: "flex",
          alignItems: "center",
          fontFamily: "'Segoe UI', sans-serif",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <div style={{ flex: "1 1 500px" }}>
            <span
              style={{
                background: "rgba(255,255,255,0.12)",
                padding: "10px 18px",
                borderRadius: "30px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              🔥 New Collection Available
            </span>

            <h1
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: "800",
                lineHeight: "1.1",
                margin: "25px 0",
              }}
            >
              Discover The
              <span style={{ color: "#a5b4fc" }}> Best Products </span>
              For Your Lifestyle
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                maxWidth: "550px",
              }}
            >
              Shop the latest trends, premium quality products, and exclusive
              deals with fast delivery and secure payments.
            </p>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "30px",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "15px 35px",
                  background: "#fff",
                  color: "#4f46e5",
                  border: "none",
                  borderRadius: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </button>

              <button
                style={{
                  padding: "15px 35px",
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.2)",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                Explore Products
              </button>
            </div>
          </div>

          <div
            style={{
              flex: "1 1 400px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(20px)",
                borderRadius: "25px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "120px" }}>🛍️</div>
              <h2>Premium Shopping Experience</h2>
              <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
                Discover thousands of carefully selected products with amazing
                discounts and fast delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section
        style={{
          padding: "80px 20px",
          background: "#f8fafc",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              color: "#1e293b",
              marginBottom: "10px",
            }}
          >
            Featured Products
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              marginBottom: "50px",
            }}
          >
            Explore our most popular products
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
              alignItems: "stretch",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "25px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "80px",
                    marginBottom: "15px",
                  }}
                >
                  {product.image}
                </div>

                {/* Product Name */}
                <h3
                  style={{
                    color: "#1e293b",
                    margin: "0",
                    minHeight: "60px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: "1.4",
                  }}
                >
                  {product.name}
                </h3>

                {/* Price */}
                <p
                  style={{
                    color: "#4f46e5",
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    margin: "15px 0",
                  }}
                >
                  {product.price}
                </p>

                {/* Button stays aligned */}
                <div
                  style={{
                    marginTop: "auto",
                    width: "100%",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "#4f46e5",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}