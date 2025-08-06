// src/services/api.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api"; // Update if deployed

// Create an Axios instance
const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET Request
export async function getApiCall(endpoint, token = "") {
  try {
    const response = await apiInstance.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || error.message || "Error occurred",
    };
  }
}

// POST Request
export async function postApiCall(endpoint, data = {}, token = "") {
  try {
    const response = await apiInstance.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || error.message || "Error occurred",
    };
  }
}
