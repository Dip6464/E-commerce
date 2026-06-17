import { useState } from "react";
import { supabase } from "../supabse";
import "./Addp.css";

export function Addp() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");

  async function Addproduct() {
    const { error } = await supabase
      .from("Products")
      .insert({
        Name: name,
        Price: price,
        image_url: image,
      });

    if (error) {
      alert("❌ Failed to add product");
      return;
    }

    alert("🎉 Product Added Successfully!");

    setname("");
    setprice("");
    setimage("");
  }

  return (
    <div className="page-container">
      <div className="background-circle circle1"></div>
      <div className="background-circle circle2"></div>

      <div className="add-product-card">

        <div className="form-section">
          <h1>Add Product</h1>
          <p>Create and manage your store inventory</p>

          <div className="input-group">
            <label>📦 Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>💰 Price</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>🖼 Image URL</label>
            <input
              type="text"
              placeholder="Paste image URL"
              value={image}
              onChange={(e) => setimage(e.target.value)}
            />
          </div>

          <button className="submit-btn" onClick={Addproduct}>
            ➕ Add Product
          </button>
        </div>

        <div className="preview-card">
          <h2>Live Preview</h2>

          <div className="product-card">
            <img
              src={
                image ||
                "https://via.placeholder.com/300x220?text=Product+Preview"
              }
              alt="preview"
            />

            <div className="product-info">
              <h3>{name || "Product Name"}</h3>
              <span>₹ {price || "0.00"}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}