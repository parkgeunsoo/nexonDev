import axios from "axios";

export const nexonApi = axios.create({
  headers: {
    "x-nxopen-api-key": import.meta.env.VITE_NEXON_API_KEY,
  },
});
