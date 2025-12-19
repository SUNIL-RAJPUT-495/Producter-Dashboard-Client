import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { IoBagOutline } from "react-icons/io5";
import boxlogo from "../../assets/iconoir_grid-add.png";
import Axios from "../../utils/Axios";
import SummaryApi from "../../common/SummaryApi";
import { UploadProductPage } from "./products/UploadProductPage";
import { ProductList } from "./products/ProductList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productImagePreview, setProductImagePreview] = useState(null);
  const [editId, setEditId] = useState(null);

  const [data, setData] = useState({
    productName: "",
    productType: "",
    stock: "",
    MRP: "",
    SellingPrice: "",
    BrandName: "",
    productImage: "",
    ExchangeReturnEligibility: "",
  });

  /* ================= FETCH PRODUCTS ================= */
  const fetchProducts = async () => {
    try {
      const res = await Axios({
        url: SummaryApi.getProduct.url,
        method: SummaryApi.getProduct.method,
      });
      setProducts(res.data.data || []);
    } catch {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= IMAGE UPLOAD ================= */
  const handleUploadImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setProductImagePreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await Axios({
        url: SummaryApi.uploadImage.url,
        method: SummaryApi.uploadImage.method,
        data: formData,
      });

      setData((prev) => ({
        ...prev,
        productImage: res.data.data.url,
      }));

      toast.success("Image uploaded");
    } catch {
      toast.error("Image upload failed");
    }
  };

  /* ================= ADD / UPDATE PRODUCT ================= */
  const uploadProduct = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // UPDATE
        const res = await Axios({
          url: SummaryApi.editProduct(editId).url,
          method: SummaryApi.editProduct(editId).method,
          data,
        });

        setProducts((prev) =>
          prev.map((p) => (p._id === editId ? res.data.data : p))
        );

        toast.success("Product updated");
      } else {
        // ADD
        const res = await Axios({
          url: SummaryApi.product.url,
          method: SummaryApi.product.method,
          data,
        });

        setProducts((prev) => [...prev, res.data.data]);
        toast.success("Product added");
      }

      resetForm();
    } catch {
      toast.error("Operation failed");
    }
  };

  /* ================= RESET FORM ================= */
  const resetForm = () => {
    setShowModal(false);
    setEditId(null);
    setProductImagePreview(null);
    setData({
      productName: "",
      productType: "",
      stock: "",
      MRP: "",
      SellingPrice: "",
      BrandName: "",
      productImage: "",
      ExchangeReturnEligibility: "",
    });
  };

 // DELETE PRODUCT 
  const deleteProduct = async (id) => {
    try {
      await Axios(SummaryApi.deleteProduct(id));
      setProducts((prev) => prev.filter((p) => p._id !== id));
      toast.success("Product deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  //EDIT PRODUCT
  const handleEdit = (id, product) => {
    setEditId(id);
    setData(product);
    setProductImagePreview(product.productImage);
    setShowModal(true);
  };

  // PUBLISH PRODUCT
 const handlePublish = async (id, status) => {
  try {
    const res = await Axios({
      url: SummaryApi.editProduct(id).url,
      method: SummaryApi.editProduct(id).method,
      data: { isPublished: status },
    });

    setProducts((prev) =>
      prev.map((p) => (p._id === id ? res.data.data : p))
    );

    toast.success(
      status ? "Product published successfully" : "Product unpublished"
    );
  } catch {
    toast.error("Publish action failed");
  }
};


  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

    
      <div style={{ height: "50px", background: "#f5f7fa" }}>
        <div className="d-flex justify-content-between p-2 mx-4">
          <div>
            <IoBagOutline className="me-2" /> Products
          </div>
        </div>
      </div>

      
      {products.length === 0 ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div className="text-center">
            <div>
              <img src={boxlogo} alt="logo" />
            </div>
            <p className="fw-bold">Feels a little empty over here...</p>
            <p>
              You can create products without connecting store.
              <br />
              Add products to store anytime.
            </p>
            <Button
              style={{
                width: "315px",
                fontSize: "14px",
                backgroundColor: "#000FB4",
              }}
              onClick={() => setShowModal(true)}
            >
              Add your Products
            </Button>
          </div>
        </div>
      ) : (
        <ProductList
          products={products}
          onDelete={deleteProduct}
          onEdit={handleEdit}
          handlePublish={handlePublish}
          setShowModal={setShowModal} 
        />
      )}

     
      <UploadProductPage
        show={showModal}
        onHide={resetForm}
        uploadProduct={uploadProduct}
        handleChange={handleChange}
        handleUploadImage={handleUploadImage}
        data={data}
        productImagePreview={productImagePreview}
        isEdit={!!editId}
        setShowModal={setShowModal}
      />
    </>
  );
};
