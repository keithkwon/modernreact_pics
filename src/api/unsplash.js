import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KBHNjiOkkI7vlg-CmyRoIy29kQcZ37eTv0EoC0sgIzc",
  },
});
