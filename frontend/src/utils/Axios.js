import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://brett.com",
});

export default customFetch;
