export interface Artist {
  id: number;
  name: string;
  followers: {
    total: number;
  };
  genres: string[];
  image: {
    url: string;
  }[];
}

export interface Data {
  artists: { name: string; followers: number; image: string }[];
  top_genres: string[];
}
