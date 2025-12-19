import React, { useEffect, useState } from "react";
import fram from "../../assets/iconoir_grid-add.png";
import { GoHome } from "react-icons/go";
import Axios from "../../utils/Axios";
import SummaryApi from "../../common/SummaryApi";
import { ProductList } from "../admin/products/ProductList";
import { toast } from "react-toastify";

export const Homepage = () => {
  const [key, setKey] = useState("published");
  const [products, setProducts] = useState([]);

 // fatch product 

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

   // publish button

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

      toast.success(status ? "Product published" : "Product unpublished");
    } catch {
      toast.error("Action failed");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await Axios(SummaryApi.deleteProduct(id));
      setProducts((prev) => prev.filter((p) => p._id !== id));
      toast.success("Product deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleEdit = (id, product) => {
 
    console.log("Edit from home:", id, product);
  };

  
  const filteredProducts =
    key === "published"
      ? products.filter((p) => p.isPublished)
      : products.filter((p) => !p.isPublished);

  return (
    <div>
      {/* HEADER */}
      <div
        style={{
          height: "50px",
          background: `
            radial-gradient(circle at left, #fbf6f4ff, transparent 60%),
            radial-gradient(circle at right, #e5ebf9ff, transparent 60%),
            linear-gradient(90deg, #fcf9edff, #f7f9ffff)
          `,
        }}
      >
        <div className="d-flex align-items-center justify-content-between p-2 mx-4">
          <div>
            <GoHome className="me-2" /> Home
          </div>
          <div
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          />
        </div>
      </div>

     
      <div className="d-flex mt-2 ms-3 border-bottom">
        <span
          className={`me-3 fw-bold ${
            key === "published" ? "border-bottom border-3 border-success" : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setKey("published")}
        >
          Published
        </span>

        <span
          className={`fw-bold ${
            key === "unpublished" ? "border-bottom border-3 border-success" : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setKey("unpublished")}
        >
          Unpublished
        </span>
      </div>

    
      {filteredProducts.length === 0 ? (
        <div
          style={{ height: "80vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <EmptyState
            title={
              key === "published"
                ? "No Published Products"
                : "No Unpublished Products"
            }
            desc="Your products will appear here."
          />
        </div>
      ) : (
        <ProductList
          products={filteredProducts}
          onDelete={deleteProduct}
          onEdit={handleEdit}
          handlePublish={handlePublish}
          hideHeader={true}
        />
      )}
    </div>
  );
};


const EmptyState = ({ title, desc }) => (
  <div
    className="d-flex flex-column justify-content-center align-items-center text-center"
    style={{ height: "190px", width: "335px" }}
  >
    <img src={fram} alt="" className="mb-2" />
    <p className="fw-bold mb-1">{title}</p>
    <p style={{ fontSize: "12px", color: "#98A2B3" }}>{desc}</p>
  </div>
);
