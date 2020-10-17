import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  getTests(perPage, page) {
    return apiClient.get("/tests?_limit=" + perPage + "&_page=" + page);
  },
  getTest(id) {
    return apiClient.get("/tests/" + id);
  },
  postTest(test) {
    return apiClient.post("/tests", test);
  },
};
