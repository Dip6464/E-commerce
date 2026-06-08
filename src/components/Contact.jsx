export function Contact() {
  return (
    <>
      <section
        style={{
          padding: "100px 20px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 35%, #312e81 70%, #4f46e5 100%)",
          fontFamily: "'Segoe UI', sans-serif",
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
            right: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(99,102,241,0.25)",
            filter: "blur(70px)",
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
              marginBottom: "60px",
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
              Contact Us
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#ffffff",
                margin: "15px 0",
                fontWeight: "800",
              }}
            >
              We'd Love to
              <span style={{ color: "#a5b4fc" }}> Hear From You</span>
            </h2>

            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Have questions about an order, product, or service? Our team is
              always ready to help you with a quick and friendly response.
            </p>
          </div>

          {/* Contact Container */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/* Contact Info */}
            <div>
              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "30px",
                  borderRadius: "25px",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                <h3
                  style={{
                    color: "#ffffff",
                    marginBottom: "20px",
                    fontSize: "1.8rem",
                  }}
                >
                  Get In Touch
                </h3>

                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{ margin: "0 0 5px", color: "#a5b4fc" }}>
                    📍 Address
                  </h4>
                  <p style={{ color: "#cbd5e1", margin: 0 }}>
                    123 Commerce Street, Mumbai, India
                  </p>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{ margin: "0 0 5px", color: "#a5b4fc" }}>
                    📞 Phone
                  </h4>
                  <p style={{ color: "#cbd5e1", margin: 0 }}>
                    +91 98765 43210
                  </p>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{ margin: "0 0 5px", color: "#a5b4fc" }}>
                    📧 Email
                  </h4>
                  <p style={{ color: "#cbd5e1", margin: 0 }}>
                    support@yourstore.com
                  </p>
                </div>

                <div>
                  <h4 style={{ margin: "0 0 5px", color: "#a5b4fc" }}>
                    ⏰ Working Hours
                  </h4>
                  <p style={{ color: "#cbd5e1", margin: 0 }}>
                    Mon - Sat: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "35px",
                borderRadius: "25px",
                color: "#fff",
              }}
            >
              <h3
                style={{
                  marginBottom: "25px",
                  color: "#ffffff",
                  fontSize: "1.8rem",
                }}
              >
                Send a Message
              </h3>

              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "15px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    outline: "none",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    boxSizing: "border-box",
                  }}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "15px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    outline: "none",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    boxSizing: "border-box",
                  }}
                />

                <input
                  type="text"
                  placeholder="Subject"
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "15px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    outline: "none",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    boxSizing: "border-box",
                  }}
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "20px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    outline: "none",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    resize: "none",
                    boxSizing: "border-box",
                  }}
                />

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "15px",
                    border: "none",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}