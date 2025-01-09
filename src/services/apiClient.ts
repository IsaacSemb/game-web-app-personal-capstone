import axios from "axios";
import { GAME_SITE_API_KEY } from "../../secrets";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: GAME_SITE_API_KEY,
  },
});
