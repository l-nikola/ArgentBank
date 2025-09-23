import axios from "axios";

// Get the environment variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL,
});

// Login User
export async function loginUser(email, password) {
  try {
    const response = await apiClient.post("/user/login", {
      email,
      password,
    });
    return response.data.body.token;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
}

// Signup User
export async function signupUser(email, password, firstName, lastName) {
  try {
    const response = await apiClient.post("/user/signup", {
      email,
      password,
      firstName,
      lastName,
    });
    return response.data.body.token;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
}

// Get User Profile
export async function getUserProfile(token) {
  try {
    const response = await apiClient.post(
      "/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
}

// Update User Profile
export async function updateUserProfile(token, updateData) {
  try {
    const response = await apiClient.put("/user/profile", updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.body;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
}
