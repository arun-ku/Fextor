import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://et-be.cyclic.app";
// const BASE_URL = "http://192.168.9.230:3000";

class ApiService {
  getHeaders = async () => {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      family: await AsyncStorage.getItem("family"),
    };
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
