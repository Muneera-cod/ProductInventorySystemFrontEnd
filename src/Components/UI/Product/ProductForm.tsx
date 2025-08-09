import React, { useState } from 'react';

function ProductForm() {
  const [formData, setFormData] = useState({
    product_id: '0', // 0 means insert
    product_code: '',
    product_name: '',
    product_image: null,
    created_user: 'F9FFF214-9040-4EEB-9E48-018CBE653D43', // example GUID
    is_favourite: false,
    active: true,
    hsn_code: '',
    variant_id: '',
    subvariant_id: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsonData = {
      ...formData,
      is_favourite: formData.is_favourite ? 1 : 0,
      active: formData.active ? 1 : 0
    };

    try {
      const res = await fetch("https://localhost:5001/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData)
      });

      const result = await res.json();
      console.log("Response:", result);

      if (result.ResponseCode === 1) {
        alert("Product saved successfully!");
      } else {
        alert("Failed to save product.");
      }
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  return (
    <div className="product-form-container">
      <div className="form-header">
        <h2>Add / Update Product</h2>
        <p>Fill in the product details below</p>
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Basic Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Product Code</label>
              <input
                type="text"
                name="product_code"
                value={formData.product_code}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="product_name"
                value={formData.product_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>HSN Code</label>
              <input
                type="text"
                name="hsn_code"
                value={formData.hsn_code}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Product Image</label>
              <input
                type="file"
                name="product_image"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Additional Settings</h3>
          <div className="form-row">
            <div className="form-group">
              
            </div>
            <div className="form-group">
              <label>Variant ID</label>
              <input
                type="text"
                name="variant_id"
                value={formData.variant_id}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Subvariant ID</label>
              <input
                type="text"
                name="subvariant_id"
                value={formData.subvariant_id}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="is_favourite"
                  checked={formData.is_favourite}
                  onChange={handleChange}
                />
                Favourite
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="active"
                  checked={formData.active}
                  onChange={handleChange}
                />
                Active
              </label>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Save Product
          </button>
          <button
            type="reset"
            className="btn btn-outline"
            onClick={() =>
              setFormData({
                product_id: '0',
                product_code: '',
                product_name: '',
                product_image: null,
                created_user: '',
                is_favourite: false,
                active: true,
                hsn_code: '',
                variant_id: '',
                subvariant_id: ''
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;

