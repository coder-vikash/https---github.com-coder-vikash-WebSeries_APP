// Services/omdbService.js
const API_KEY = "dc248e93"; // Replace with your actual OMDB API key
const BASE_URL = "https://www.omdbapi.com/"; // Clean base URL without parameters

export const searchMedia = async (query, type = "", page = 2) => {
  try {
    const url = new URL(BASE_URL);
    url.searchParams.append("apikey", API_KEY);
    url.searchParams.append("s", query);
    if (type) url.searchParams.append("type", type);
    url.searchParams.append("page", page);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === "True") {
      return data.Search || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching data from OMDB:", error);
    return [];
  }
};

export const getMediaById = async (id) => {
  try {
    const url = new URL(BASE_URL);
    url.searchParams.append("apikey", API_KEY);
    url.searchParams.append("i", id);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching media details:", error);
    return null;
  }
};
