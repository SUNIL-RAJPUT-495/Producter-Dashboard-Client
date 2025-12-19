import { Modal, Button } from "react-bootstrap";
import { useRef } from "react";

export const UploadProductPage = ({
  show,
  onHide,
  uploadProduct,
  handleChange,
  data,
  handleUploadImage,
  productImagePreview,
  
  
}) => {
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const style = {fontSize:"14px", marginBottom: "10px"}
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>

      <form onSubmit={uploadProduct}>
        <Modal.Body>
          <label style={style} htmlFor="productName">Product Name</label>
          <input 
            id="productName"
            type="text"
            className="form-control mb-2"
            name="productName"
            value={data.productName}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
          <label style={style } htmlFor="productType">Product Type</label>
          <select
            id="productType"
            className="form-select mb-2"
            name="productType"
            value={data.productType}
            onChange={handleChange}
            required
          >
            <option value="">Select Product Type</option>
            <option value="Foods">Foods</option>
            <option value="Electronics">Electronics</option>
            <option value="Cloths">Cloths</option>
            <option value="Beauty Products">Beauty Products</option>
          </select>
          <label style={style} htmlFor="stock"> Quantity Stock</label>
          <input
            id="stock"
            type="number"
            className="form-control mb-2"
            name="stock"
            value={data.stock}
            onChange={handleChange}
            placeholder="Stock"
            required
          />
          <label style={style} htmlFor="MRP">MRP</label>
          <input
            id="MRP"
            type="number"
            className="form-control mb-2"
            name="MRP"
            value={data.MRP}
            onChange={handleChange}
            placeholder="MRP"
            required
          />
          <label style={style} htmlFor="SellingPrice">Selling Price</label>
          <input
            id="SellingPrice"
            type="number"
            className="form-control mb-2"
            name="SellingPrice"
            value={data.SellingPrice}
            onChange={handleChange}
            placeholder="Selling Price"
            required
          />
          <label style={style} htmlFor="BrandName">Brand Name</label>
          <input
            id="BrandName"
            type="text"
            className="form-control mb-2"
            name="BrandName"
            value={data.BrandName}
            onChange={handleChange}
            placeholder="Brand Name"
            required
          />
          <label style={style} htmlFor="image">Upload Product Images</label>
          {/* IMAGE PREVIEW */}
          <div onClick={handleDivClick}
            className="d-flex align-items-center gap-3 mb-3"
            style={{ border: "2px dashed  #ccc", borderRadius: "10px" }}
          >
            {!productImagePreview?
            (<div className="d-flex align-items-center justify-content-center w-100 flex-column">
              <p className="text-gray">Enter Description</p>
            <p className="fw-bold">Browser</p>
            </div>):(
            <div
              id="imag"
              
              style={{
                height: 120,
                width: 120,
                background: "#f0f0f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {productImagePreview ? (
                <img
                  src={productImagePreview}
                  alt="preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <small>Click to select</small>
              )}
            </div>)}

            <input style={style}
              id="image"
              ref={fileInputRef}
              type="file"
              className="d-none"
              onChange={handleUploadImage}
              accept="image/*"
            />
          </div>
          <label style={style} htmlFor="ExchangeReturnEligibility">
            Exchange or return eligibility
          </label>
          <select
            id="ExchangeReturnEligibility"
            className="form-select mb-2"
            name="ExchangeReturnEligibility"
            value={data.ExchangeReturnEligibility}
            onChange={handleChange}
            required
          >
            <option value="">Exchange / Return</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit" disabled={!data.productImage}>
            Create Product
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
