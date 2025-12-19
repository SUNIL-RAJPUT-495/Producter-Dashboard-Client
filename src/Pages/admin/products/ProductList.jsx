import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";


export const ProductList = ({
  products,
  onDelete,
  onEdit,
  handlePublish,
  setShowModal,
   hideHeader = false,
  
}) => {
  if (!Array.isArray(products)) return null;
  const infoRowStyle = {
    fontSize: "14px",
    color: "#6c757d", 
  };

  const infoValueStyle = {
    fontWeight: "500",
    color: "#495057",
  };

  return (
    <Container className="mt-4">
     {!hideHeader && (
  <div className="d-flex align-items-center justify-content-between">
    <h2>Products</h2>
    <Button onClick={() => setShowModal(true)} className="bg-white border-0 text-dark d-flex align-items-center justify-content-center g-2"><IoMdAdd size={20} /> 
Add Products</Button>
  </div>
)}

      <div className="d-flex flex-wrap gap-3 mt-3">
        {products.length === 0 && <p>No products found</p>}

        {products.map((p) => (
          <Card
            style={{
              width: "363px",
              height: "509px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              borderRadius: "16px",
            }}
            key={p._id}
          >
            <div className="p-2 rounded d-flex align-items-center justify-content-center">
              <div
                style={{
                  width: "331px",
                  height: "197px",
                  backgroundColor: "#F8F9FB",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card.Img
                  variant="top"
                  src={p.productImage || "https://via.placeholder.com/150"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <Card.Body>
              <Card.Title>{p.productName}</Card.Title>
              <Card.Text>
                <div>
                  <div
                    className="d-flex align-items-center justify-content-between py-1"
                    style={infoRowStyle}
                  >
                    <span>Product type - </span>
                    <span style={infoValueStyle}>{p.productType}</span>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-between py-1"
                    style={infoRowStyle}
                  >
                    <span>Quantity Stock - </span>
                    <span style={infoValueStyle}>{p.stock}</span>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-between py-1"
                    style={infoRowStyle}
                  >
                    <span>MRP - </span>
                    <span style={infoValueStyle}>₹{p.MRP}</span>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-between py-1"
                    style={infoRowStyle}
                  >
                    <span>Selling Price - </span>
                    <span style={infoValueStyle}>₹{p.SellingPrice}</span>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-between py-1"
                    style={infoRowStyle}
                  >
                    <span>Brand Name - </span>
                    <span style={infoValueStyle}>{p.BrandName}</span>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-between py-1"
                    style={infoRowStyle}
                  >
                    <span>Exchange Eligibility - </span>
                    <span style={infoValueStyle}>
                      {p.ExchangeReturnEligibility}
                    </span>
                  </div>
                </div>
              </Card.Text>

              <div className="d-flex justify-content-between">
                <Button
                  size="sm"
                  style={{
                    width: "133.5px",
                    height: "40px",
                    fontSize: "14px",
                    borderRadius: "8px",
                    backgroundColor: p.isPublished ? "#28a745" : "#000FB4",
                    color: "#fff",
                    border: "none",
                  }}
                  onClick={() => handlePublish(p._id, !p.isPublished)}
                >
                  {p.isPublished ? "Unpublish" : "Publish"}
                </Button>

                <Button
                  size="sm"
                  style={{
                    width: "133.5px",
                    fontSize: "14px",
                    height: "40px",
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "8px",
                  }}
                  onClick={() => onEdit(p._id, p)}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  onClick={() => onDelete(p._id)}
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#fff",
                    border: "1px solid #dcdcdfff",
                    padding: 0,
                  }}
                >
                  <RiDeleteBin5Line size={24} color="#6c757d" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};
