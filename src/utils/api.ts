import axios from "axios";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
console.log("API Key:", import.meta.env.VITE_YOUTUBE_API_KEY); // For Vite


// const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

if (!API_KEY) {
  throw new Error("API key is missing. Make sure to set REACT_APP_YOUTUBE_API_KEY in the .env file.");
}

export const fetchVideos = async (query: string) => {
  const BASE_URL = "https://www.googleapis.com/youtube/v3";
  
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: "snippet",
      maxResults: 5,
      q: query,
      key: API_KEY,
    },
  });
  return response.data.items;
};

