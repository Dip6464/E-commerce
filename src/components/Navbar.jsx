import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

export function Navbar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
    } else {
      alert("Logged out successfully");
    }
  }

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

        .logout-btn {
          padding: 10px 18px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .logout-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(239,68,68,0.4);
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}