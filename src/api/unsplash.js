import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID kFWpCpQBVdWHJzIhELnpc98xxHfF6WXZAmr6zViJ2MA",
  },
});
