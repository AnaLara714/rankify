import axios from "axios";
import { Artist } from "../types/types";

export const getArtistData = async (
  token: string,
  artistIds: string[]
): Promise<Artist[]> => {
  const artistData: Artist[] = [];
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  for (const artistId of artistIds) {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}`,
      { headers }
    );
    artistData.push(response.data);
  }
  console.log(artistData);
  return artistData;
};
