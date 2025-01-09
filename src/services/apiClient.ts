import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "25c8d4f527834c0db3986df343a9370e",
  },
});
