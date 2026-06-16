export function Addition() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$49",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: "$59",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#1e293b",
            fontSize: "3rem",
          }}
        >
          🛒 Shopping Cart
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          Browse products and add them to your cart
        </p>
      </div>

      {/* Product Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              transition: "0.3s",
            }}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            {/* Product Details */}
            <div
              style={{
                padding: "20px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  color: "#0f172a",
                }}
              >
                {product.name}
              </h3>

              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2563eb",
                  margin: "10px 0 20px",
                }}
              >
                {product.price}
              </p>

              <button
                onClick={() =>
                  alert(`${product.name} added to cart!`)
                }
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "none",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #2563eb, #4f46e5)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow:
                    "0 6px 15px rgba(37,99,235,0.3)",
                }}
              >
                🛒 Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary UI */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "50px auto 0",
          background: "#fff",
          padding: "25px",
          borderRadius: "18px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: "#0f172a",
          }}
        >
          Cart Summary
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            fontSize: "18px",
          }}
        >
          <span>Total Items</span>
          <strong>0</strong>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            fontSize: "18px",
          }}
        >
          <span>Total Price</span>
          <strong>$0</strong>
        </div>

        <button
          style={{
            width: "100%",
            marginTop: "25px",
            padding: "16px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg, #22c55e, #16a34a)",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}