
export function About() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 35%, #312e81 70%, #4f46e5 100%)",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-100px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(99,102,241,0.25)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "8%",
          width: "90px",
          height: "90px",
          border: "2px solid rgba(255,255,255,0.08)",
          transform: "rotate(45deg)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "45%",
          width: "200px",
          height: "200px",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 2px, transparent 2px)",
          backgroundSize: "20px 20px",
          opacity: 0.6,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "50px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Content */}
        <div style={{ flex: "1 1 500px" }}>
          <span
            style={{
              color: "#a5b4fc",
              fontWeight: "bold",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            About Us
          </span>

          <h2
            style={{
              fontSize: "3rem",
              margin: "15px 0",
              color: "#ffffff",
              lineHeight: "1.2",
            }}
          >
            Your Trusted Destination for
            <span style={{ color: "#a5b4fc" }}> Smart Shopping</span>
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "25px",
            }}
          >
            We believe shopping should be simple, enjoyable, and affordable.
            Our platform brings together premium products, unbeatable deals,
            and a seamless shopping experience designed for modern customers.
          </p>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            From fashion and electronics to home essentials and lifestyle
            products, we carefully curate collections that deliver quality,
            value, and convenience. Thousands of happy customers trust us every
            day for fast delivery and exceptional service.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "10K+", label: "Products Available" },
              { number: "99%", label: "Customer Satisfaction" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "20px",
                  borderRadius: "15px",
                  minWidth: "150px",
                  color: "#fff",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: "#ffffff",
                    fontSize: "1.8rem",
                  }}
                >
                  {item.number}
                </h3>
                <p
                  style={{
                    marginTop: "8px",
                    color: "#cbd5e1",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div
          style={{
            flex: "1 1 450px",
            position: "relative",
            minHeight: "450px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "280px",
              height: "280px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "30px",
              top: "20px",
              right: "20px",
              backdropFilter: "blur(10px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "rgba(99,102,241,0.2)",
              borderRadius: "30px",
              bottom: "20px",
              left: "20px",
            }}
          />

          <div
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "30px",
              padding: "40px",
              textAlign: "center",
              backdropFilter: "blur(15px)",
              zIndex: 2,
              color: "#fff",
            }}
          >
            <div
              style={{
                fontSize: "80px",
                marginBottom: "20px",
              }}
            >
              🛍️
            </div>

            <h3
              style={{
                fontSize: "2rem",
                marginBottom: "15px",
                color: "#ffffff",
              }}
            >
              Shop With Confidence
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              Secure payments, fast delivery, easy returns, and a customer-first
              approach make every purchase worry-free.
            </p>

            <button
              style={{
                background: "#4f46e5",
                color: "#fff",
                border: "none",
                padding: "14px 30px",
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}