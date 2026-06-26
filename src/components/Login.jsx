import { useState } from "react";
import { supabase } from "../supabase";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful!");
    }
  }

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
    }
  }

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: system-ui, -apple-system, sans-serif;
        }

        body {
          background: #050816;
        }

        .login-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
          background:
            radial-gradient(circle at 20% 20%, rgba(139,92,246,.25), transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(59,130,246,.25), transparent 30%),
            #050816;
        }

        .main-box {
          width: 100%;
          max-width: 1450px;
          min-height: 850px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 30px;
          overflow: hidden;
          background: #07112a;
          border: 1px solid rgba(59,130,246,.25);
          box-shadow: 0 0 40px rgba(59,130,246,.18);
        }

        .left-panel {
          padding: 70px 80px;
          color: white;
          background: linear-gradient(135deg,#030712,#08112f);
        }

        .brand-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .brand-icon {
          font-size: 3.4rem;
          line-height: 1;
        }

        .brand-text {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(90deg,#ec4899,#3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          margin-left: 74px;
          color: #cbd5e1;
          font-size: 1.3rem;
        }

        .welcome {
          margin-top: 90px;
          font-size: 5rem;
          font-weight: 800;
          line-height: 1.15;
          color: white;
        }

        .welcome span {
          display: block;
          background: linear-gradient(90deg,#60a5fa,#c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .desc {
          margin-top: 25px;
          color: #cbd5e1;
          font-size: 1.35rem;
          line-height: 1.8;
          max-width: 500px;
        }

        .features {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .feature {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .icon {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 28px;
          border: 1px solid #8b5cf6;
          box-shadow: 0 0 20px rgba(139,92,246,.45);
        }

        .feature h3 {
          font-size: 1.8rem;
        }

        .feature p {
          color: #cbd5e1;
          margin-top: 6px;
        }

        .cart {
          margin-top: 70px;
          text-align: center;
          font-size: 180px;
          filter: drop-shadow(0 0 25px #8b5cf6);
        }

        .right-panel {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .login-card {
          width: 100%;
          max-width: 620px;
          padding: 60px;
          border-radius: 28px;
          background: rgba(17,24,39,.75);
          border: 1px solid rgba(168,85,247,.55);
          box-shadow: 0 0 40px rgba(168,85,247,.25);
          color: white;
        }

        .user-icon {
          font-size: 60px;
          text-align: center;
          margin-bottom: 20px;
        }

        .login-title {
          text-align: center;
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          color: white;
        }

        .login-title span {
          color: #60a5fa;
        }

        .login-sub {
          text-align: center;
          color: #cbd5e1;
          margin: 18px 0 55px;
          font-size: 1.2rem;
        }

        .input-group {
          margin-bottom: 28px;
        }

        .input-group label {
          display: block;
          margin-bottom: 12px;
          font-size: 1.15rem;
          font-weight: 600;
        }

        .input-group input {
          width: 100%;
          padding: 20px;
          background: rgba(15,23,42,.75);
          border: 1px solid #3b82f6;
          border-radius: 16px;
          color: white;
          font-size: 1rem;
          outline: none;
        }

        .input-group input:focus {
          box-shadow: 0 0 15px rgba(59,130,246,.4);
        }

        .login-btn,
        .signup-btn {
          width: 100%;
          padding: 18px;
          border-radius: 16px;
          color: white;
          font-size: 1.3rem;
          font-weight: 700;
          cursor: pointer;
          transition: .3s;
        }

        .login-btn {
          margin-top: 20px;
          border: none;
          background: linear-gradient(90deg,#a855f7,#3b82f6);
        }

        .signup-btn {
          background: transparent;
          border: 1px solid #3b82f6;
        }

        .login-btn:hover,
        .signup-btn:hover {
          transform: translateY(-2px);
        }

        .divider {
          text-align: center;
          margin: 25px 0;
          color: #94a3b8;
        }

        @media (max-width: 1100px) {
          .main-box {
            grid-template-columns: 1fr;
          }

          .left-panel {
            display: none;
          }
        }
      `}</style>

      <div className="login-page">
        <div className="main-box">
          <div className="left-panel">
            <div className="brand-wrapper">
              <div className="brand">
                <span className="brand-icon">🛒</span>
                <span className="brand-text">EliteMart</span>
              </div>
              <div className="subtitle">Premium Shopping Experience</div>
            </div>

            <div className="welcome">
              Welcome
              <span>Back!</span>
            </div>

            <div className="desc">
              Sign in to continue your premium shopping experience.
            </div>

            <div className="features">
              <div className="feature">
                <div className="icon">🛡️</div>
                <div>
                  <h3>Secure & Safe</h3>
                  <p>Your data is protected.</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon">⚡</div>
                <div>
                  <h3>Fast & Easy</h3>
                  <p>Quick login process.</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon">🏷️</div>
                <div>
                  <h3>Exclusive Deals</h3>
                  <p>Special offers for members.</p>
                </div>
              </div>
            </div>

            <div className="cart">🛒</div>
          </div>

          <div className="right-panel">
            <div className="login-card">
              <div className="user-icon">👤</div>

              <h1 className="login-title">
                Login to <span>EliteMart</span>
              </h1>

              <p className="login-sub">
                Enter your details to access your account
              </p>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="login-btn" onClick={handleLogin}>
                Login →
              </button>

              <div className="divider">OR</div>

              <button className="signup-btn" onClick={handleSignup}>
                Sign Up →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}