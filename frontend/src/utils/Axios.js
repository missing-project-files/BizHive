import axios from "axios";

const customFetch = axios.create({
  baseURL: "amazon",
});

export default customFetch;
