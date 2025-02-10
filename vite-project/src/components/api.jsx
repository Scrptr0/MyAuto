// src/components/api.jsx
import axios from "axios";

// Fetch manufacturers
export const fetchManufacturers = async () => {
  try {
    const response = await axios.get("https://static.my.ge/myauto/js/mans.json");
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error loading manufacturers:", error);
    return [];
  }
};

// Fetch categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get("https://api2.myauto.ge/ka/cats/get");
    return response.data.data && Array.isArray(response.data.data) ? response.data.data : [];
  } catch (error) {
    console.error("Error loading categories:", error);
    return [];
  }
};
