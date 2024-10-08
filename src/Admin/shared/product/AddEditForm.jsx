import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import toast from 'react-hot-toast';


const AddEditForm = ({ visible, setVisible, productToEdit, setProductToEdit, formData, setFormData ,handleSubmit, handleInputChange }) => {

  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    if (productToEdit) {
      setFormData(productToEdit);
      setImagePreview(productToEdit?.Images?.[0]);
    }
  }, [productToEdit, setFormData]);

 const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should not exceed 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData(prev => ({ ...prev, Images: [reader.result] }));
        setError(null);
      };
      reader.onerror = () => {
        console.error("FileReader error:", reader.error);
        setError("Failed to read the image file.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setFormData(prev => ({ ...prev, Images: [] }));
    setError(null);
  };

  const general = formData.General && formData.General[0] ? formData.General[0] : {};

  return (
    <>
      
      <Dialog
        header={productToEdit ? "Edit Product" : "Add New Product"}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          setVisible(false);
          setProductToEdit(null);
        }}
        className="!w-full lg:!w-[40rem] bg-white p-5 rounded-xl border shadow-lg"
      >
        <form onSubmit={handleSubmit} className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 *:mb-2 *:*:outline-0 *:*:w-full *:*:p-1 *:text-black/60">
          
            <div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {imagePreview ? (
                <div className="mt-4 relative">
                  <img
                    src={imagePreview}
                    alt="Uploaded Preview"
                    className="w-64 h-64 object-cover rounded-lg shadow-md"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 focus:outline-none"
                    aria-label="Remove image"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="leading-[15] text-center w-64 h-64 border">No image preview available</div>
              )}
            </div>
            <div>
              <input type="file" accept="image/*" className="mt-28" onChange={handleImageChange} />
            </div>

           
            <div>
              <label>Product Name</label>
              <input
                type="text"
                name="Product_Name"
                value={formData.Product_Name}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Category</label>
              <input
                type="text"
                name="Category"
                value={formData.Category}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Regular Price</label>
              <input
                type="number"
                name="Regular_Price"
                value={formData.Regular_Price}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Sale Price</label>
              <input
                type="number"
                name="Sale_Price"
                value={formData.Sale_Price}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Discount</label>
              <input
                type="number"
                name="Discount"
                value={formData.Discount}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Available Stock</label>
              <input
                type="number"
                name="Avail_Stock"
                value={formData.Avail_Stock}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Select Status</label>
              <select
                name="Status"
                value={formData.Status}
                onChange={handleInputChange}
                className="border rounded-md"
              >
                <option value="instock">In Stock</option>
                <option value="outofstock">Out of Stock</option>
              </select>
            </div>
             <div>
              <label>Material</label>
              <input
                type="text"
                name="General.Material"
                value={general.Material}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Shape</label>
              <input
                type="text"
                name="General.Shape"
                value={general.Shape}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Place of Origin</label>
              <input
                type="text"
                name="General.Place_of_Origin"
                value={general.Place_of_Origin}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Design</label>
              <input
                type="text"
                name="General.Design"
                value={general.Design}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Min. Avail Pcs</label>
              <input
                type="number"
                name="General.MOQ"
                value={general.MOQ}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Usage</label>
              <input
                type="text"
                name="General.Usage"
                value={general.Usage}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Function</label>
              <input
                type="text"
                name="General.Function"
                value={general.Function}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>
            <div>
              <label>Brand Name</label>
              <input
                type="text"
                name="General.Brand_Name"
                value={general.Brand_Name}
                onChange={handleInputChange}
                className="border rounded-md"
              />
            </div>  
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              {productToEdit ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default AddEditForm;