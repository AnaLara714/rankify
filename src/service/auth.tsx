import axios from "axios";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID!;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET!;

export const getAuthToken = async (): Promise<string> => {
  if (!clientId || !clientSecret) {
    throw new Error("CLIENT_ID or CLIENT_SECRET is not defined");
  }

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error(
      "Error fetching token: ",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
