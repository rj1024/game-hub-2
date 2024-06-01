import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a0b69e369254e498ff9a164caa4c2f0",
  },
});
