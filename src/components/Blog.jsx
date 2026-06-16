export function Blog() {
  const blogs = [
    {
      image: "🛍️",
      title: "Top 10 Trending Products You Shouldn't Miss",
      description:
        "Discover the hottest products that customers are loving this season and why they're selling out fast.",
      date: "12 June 2026",
    },
    {
      image: "✨",
      title: "How To Shop Smarter & Save More Money",
      description:
        "Learn expert shopping tips, discount strategies, and ways to get the best value for your money.",
      date: "18 June 2026",
    },
    {
      image: "🚚",
      title: "Behind The Scenes Of Fast Delivery",
      description:
        "See how we ensure your orders arrive quickly, safely, and right on time every single day.",
      date: "25 June 2026",
    },
  ];

  return (
    <>
      <section
        style={{
          padding: "100px 20px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #312e81 100%)",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        {/* Decorative Circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "300px",
            height: "300px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-100px",
            width: "350px",
            height: "350px",
            background: "rgba(99,102,241,0.15)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "70px",
            }}
          >
            <span
              style={{
                color: "#a5b4fc",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Latest Articles
            </span>

            <h2
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "#ffffff",
                margin: "15px 0",
                fontWeight: "800",
              }}
            >
              Explore Our
              <span style={{ color: "#818cf8" }}> Blog & Insights</span>
            </h2>

            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "1.05rem",
              }}
            >
              Stay updated with shopping trends, product guides, exclusive tips,
              and everything you need for a smarter online shopping experience.
            </p>
          </div>

          {/* Blog Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
            }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "25px",
                  overflow: "hidden",
                  transition: "0.3s ease",
                }}
              >
                {/* Image Area */}
                <div
                  style={{
                    height: "220px",
                    background:
                      "linear-gradient(135deg, #4f46e5, #7c3aed, #9333ea)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "90px",
                  }}
                >
                  {blog.image}
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "25px",
                  }}
                >
                  <span
                    style={{
                      color: "#a5b4fc",
                      fontSize: "14px",
                    }}
                  >
                    {blog.date}
                  </span>

                  <h3
                    style={{
                      color: "#ffffff",
                      marginTop: "12px",
                      marginBottom: "15px",
                      lineHeight: "1.4",
                    }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    style={{
                      color: "#cbd5e1",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                    }}
                  >
                    {blog.description}
                  </p>

                  <button
                    style={{
                      background: "#6366f1",
                      color: "#fff",
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: "12px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            style={{
              marginTop: "80px",
              textAlign: "center",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "30px",
              padding: "50px 30px",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "2rem",
                marginBottom: "15px",
              }}
            >
              Stay Updated With Our Latest News
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                maxWidth: "600px",
                margin: "0 auto 25px",
                lineHeight: "1.8",
              }}
            >
              Subscribe to our newsletter and receive updates on new arrivals,
              exclusive offers, shopping guides, and special promotions.
            </p>

            <button
              style={{
                background: "#ffffff",
                color: "#4f46e5",
                border: "none",
                padding: "15px 35px",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}