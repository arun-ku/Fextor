import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://et-be.vercel.app";
// const BASE_URL = "http://192.168.1.8:3000";

class ApiService {
  getHeaders = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      family: await AsyncStorage.getItem("family"),
      year: await AsyncStorage.getItem("currentYear"),
      month: await AsyncStorage.getItem("currentMonth"),
    };

    if (!headers.month) {
      headers.month = new Date().getMonth();
    }
    if (!headers.year) {
      headers.year = new Date().getFullYear();
    }
    return headers;
  };
  get = async (url) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: await this.getHeaders(),
    });

    return response.json();
  };

  post = async (url, data = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: await this.getHeaders(),
      body: JSON.stringify(data),
    });

    return response.json();
  };

  put = async (url, data = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "PUT",
      headers: await this.getHeaders(),
      body: JSON.stringify(data),
    });

    return response.json();
  };

  delete = async (url, data = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "DELETE",
      headers: await this.getHeaders(),
      body: JSON.stringify(data),
    });

    return response.json();
  };
}

export default new ApiService();
