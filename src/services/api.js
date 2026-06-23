import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000"
});

// Submits the enquiry form. Field names match exactly what the existing
// backend's enquiryController.js expects — no backend changes needed.
export const submitEnquiry = async (formData) => {
  return API.post("/api/enquiry", formData);
};

export default API;
