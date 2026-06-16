export function Service() {
  const services = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Lightning-fast shipping with real-time tracking to keep you updated every step of the way.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Shop confidently with encrypted transactions and trusted payment methods.",
    },
    {
      icon: "🎁",
      title: "Exclusive Offers",
      description:
        "Unlock special discounts, seasonal deals, and member-only rewards.",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description:
        "Simple return process with quick refunds for a worry-free shopping experience.",
    },
  ];

  return (
    <>
      <section
        style={{
          padding: "100px 20px",
          fontFamily: "'Segoe UI', sans-serif",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #312e81 70%, #4f46e5 100%)",
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
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(99,102,241,0.25)",
            filter: "blur(70px)",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <span
            style={{
              color: "#a5b4fc",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            Our Services
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#ffffff",
              margin: "15px 0",
              fontWeight: "800",
            }}
          >
            Shopping Made
            <span style={{ color: "#a5b4fc" }}> Simple & Reliable</span>
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 60px",
              color: "#cbd5e1",
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            We combine convenience, security, and premium customer support to
            deliver an exceptional online shopping experience.
          </p>

          {/* Service Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "35px 25px",
                  borderRadius: "24px",
                  transition: "0.3s",
                }}
              >
                <div
                  style={{
                    width: "75px",
                    height: "75px",
                    margin: "0 auto 20px",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "#fff",
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  style={{
                    color: "#ffffff",
                    marginBottom: "12px",
                    fontSize: "1.3rem",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.7",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div
            style={{
              marginTop: "80px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "30px",
              padding: "40px 30px",
              color: "#fff",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              gap: "25px",
              backdropFilter: "blur(15px)",
            }}
          >
            <div>
              <h3 style={{ fontSize: "2rem", margin: 0 }}>50K+</h3>
              <p style={{ marginTop: "8px", color: "#cbd5e1" }}>
                Happy Customers
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "2rem", margin: 0 }}>10K+</h3>
              <p style={{ marginTop: "8px", color: "#cbd5e1" }}>
                Products Available
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "2rem", margin: 0 }}>99%</h3>
              <p style={{ marginTop: "8px", color: "#cbd5e1" }}>
                Customer Satisfaction
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "2rem", margin: 0 }}>24/7</h3>
              <p style={{ marginTop: "8px", color: "#cbd5e1" }}>
                Support Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;