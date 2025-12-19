export const baseURL = "https://producter-dashboard-server.vercel.app";

const SummaryApi = {
  Register:{
    url: baseURL + "/api/user/register",
    method:"post"
  },
  OtpVerification:{
    url: baseURL+ "/api/user/verify-email",
    method:"post"
  }
,

  uploadImage: {
    url: baseURL + "/api/file/upload",
    method: "post",
  },
  product: {
    url: baseURL + "/api/product/add-product",
    method: "post",
  },
  getProduct: {
    url: baseURL + "/api/product/get-product",
    method: "get",
  },
  deleteProduct: (id) => ({
    url: `${baseURL}/api/product/delete-product/${id}`,
    method: "delete",
  }),
  editProduct: (id) => ({
    url: `${baseURL}/api/product/edit-product/${id}`,
    method: "put",
  }),
};

export default SummaryApi;
