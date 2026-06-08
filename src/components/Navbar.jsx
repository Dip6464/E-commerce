import { useEffect, useState } from "react";

export function Navbar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }

        body {
          background: #0b1220;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: ${shrink ? "0.6rem 2rem" : "1rem 2.5rem"};
          background: rgba(31, 41, 55, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: white;
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease;
        }

        /* LOGO ANIMATION */
        .logo {
          font-size: ${shrink ? "1.3rem" : "1.6rem"};
          font-weight: 900;
          letter-spacing: 1px;
          cursor: pointer;
          background: linear-gradient(
            90deg,
            #60a5fa,
            #a78bfa,
            #34d399,
            #60a5fa
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 4s ease infinite, glow 2s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(96,165,250,0.4);
          }
          50% {
            text-shadow: 0 0 20px rgba(167,139,250,0.7);
          }
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 1.8rem;
          align-items: center;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-links a:hover {
          color: #fff;
          transform: translateY(-1px);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

       

        .nav-links li:last-child a:hover {
          background: rgba(96, 165, 250, 0.25);
          border-color: rgba(96, 165, 250, 0.5);
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 1rem;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">EliteMart</div>

        <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service">Service</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}