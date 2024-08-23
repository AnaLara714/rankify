import React, { useState } from "react";
import { Data } from "../types/types";
import { getAuthToken } from "../service/auth";
import { getArtistData } from "../service/api";

interface ApiProps {
  token: string | null;
  data: Data | null;
  fetchData: (artistIds: string[]) => void;
}

interface ApiProviderProps {
  children: React.ReactNode;
}

export const ApiContext = React.createContext({} as ApiProps);

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<Data | null>(null);

  React.useEffect(() => {
    const fecthToken = async () => {
      const token = await getAuthToken();
      setToken(token);
    };
    fecthToken();
  }, []);

  const fetchData = async (artistIds: string[]) => {
    if (!token) return;

    const artistData = await getArtistData(token, artistIds);
    const popArtists = artistData.filter((artist) =>
      artist.genres.includes("pop")
    );
    const sortedArtists = popArtists.sort(
      (a, b) => b.followers.total - a.followers.total
    );

    const genresCount: Record<string, number> = {};
    popArtists.forEach((artist) => {
      artist.genres.forEach((genre) => {
        if (genre != "pop") {
          genresCount[genre] = (genresCount[genre] || 0) + 1;
        }
      });
    });

    const topGenres = Object.keys(genresCount)
      .sort((a, b) => genresCount[b] - genresCount[a])
      .slice(0, 5);

    setData({
      artists: sortedArtists.map((artist) => ({
        name: artist.name,
        followers: artist.followers.total,
        image: artist.image[0]?.url || "",
      })),
      top_genres: topGenres,
    });
  };

  return (
    <ApiContext.Provider value={{ token, data, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};
