import axios from "axios";
const API_KEY = "AIzaSyAJcsF5J1z4BfgOKl7YWzJREQhhjLU-5DI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: API_KEY,
  },
});