import React, { useState, useRef, useEffect } from 'react';
import { Button } from "primereact/button";
import toast from 'react-hot-toast';
import { confirmDialog } from 'primereact/confirmdialog';
import TableView from '../shared/product/TableView';
import AddEditForm from '../shared/product/AddEditForm';
import { createProduct, deleteProduct, getAllProducts, updateProduct } from '../../Shared/Services/products/apiProducts';
// import { createProduct, deleteProduct, getAllProducts, updateProduct } from '../../Shared/Services/products/apiProducts';

const AdminProduct = () => {
  const [visible, setVisible] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    Images: [],
    Product_Name: "",
    Category: "",
    Regular_Price: 0,
    Sale_Price: 0,
    Discount: 0,
    Avail_Stock: 0,
    Status: "instock",
    General: [{
      Material: "",
      Shape: "",
      Place_of_Origin: "",
      Brand_Name: "",
      Design: "",
      MOQ: 50,
      Usage: "",
      Function: ""
    }],
    Specs: [{}]
  });


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error('Failed to fetch products');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("General.")) {
      const generalField = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        General: [{ ...prev.General[0], [generalField]: value }]
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (productToEdit) {
        const { _id, ...updatedData } = formData;
        await updateProduct(_id, updatedData);
        toast.success('Product updated successfully');
      } else {
        await createProduct(formData);
        toast.success('Product created successfully');
      }
      setVisible(false);
      setProductToEdit(null);
      // onProductUpdated();
      fetchProducts();
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error details:", error.response?.data);
      toast.error(`Failed to submit form: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleAdd = () => {
    setFormData({});
    setProductToEdit(null);
    setVisible(true);
  };




  const handleEdit = (product) => {
    setProductToEdit(product);
    setFormData(product);
    setVisible(true);
  };

  const handleDelete = async (id) => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "bg-red-500 mx-2 text-white p-2",
      rejectClassName: "p-2 mx-2 outline-none border-0",
      accept: async () => {
        try {
          await deleteProduct(id);
          fetchProducts();
          toast.success('Product deleted successfully');
        } catch (error) {
          console.error("Error deleting product:", error);
          toast.error('Failed to delete product');
        }
      }
    })
  };






  return (

    <>


      <div >
        <TableView
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          products={products}
        />
      </div>
      <AddEditForm
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        visible={visible}
        setVisible={setVisible}
        productToEdit={productToEdit}
        setProductToEdit={setProductToEdit}
      />
    </>
  );
};

export default AdminProduct;







