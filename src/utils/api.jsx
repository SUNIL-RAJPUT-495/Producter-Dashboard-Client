import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";


export const fetchproduct = async () => {
  try {
    const res = await Axios({
      url: SummaryApi.getProduct.url,
      method: SummaryApi.getProduct.method,
    });
    if (res.data.success) return res.data.data;
    return [];
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    return [];
  }
};
