import React from "react";
import { InformationContainer } from "../../components/informationContainer/informationContainer";
import { ItemGeners } from "../../components/itemGeners/itemGeners";
import { ItemWithPopularity } from "../../components/itemWithPopularity/itemWithPopularity";
import { ListCarosel } from "../../components/listCarousel/listCarousel";
import "./index.style.css";
import { ApiContext } from "../../context/apiContext";
import { artists } from "../../utils/listArtists";

export const Home = () => {
  const { data, fetchData } = React.useContext(ApiContext);

  const artistIds = artists.map((artist) => artist.id);

  React.useEffect(() => {
    fetchData(artistIds);
  }, [fetchData, artistIds]);

  return (
    <div className="bg-radial-gradient h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-white p-2 mt-12">
        <h1 className="font-bold font-EBGaramond text-6xl md:text-7xl">
          .monkstify
        </h1>
        <h3 className="font-thin font-EBGaramond text-center text-2xl m-4 w-4/5 md:w-full flex-wrap">
          Conheça mais os artistas para aumentar o engajamento!
        </h3>
        <h3 className="font-thin font-EBGaramond text-center text-lg mt-2 mr-4 ml-4 w-4/5 md:w-full">
          Veja por números de seguidores e os seus gêneros em comum.
        </h3>
      </div>
      {data ? (
        <ListCarosel>
          <InformationContainer>
            <p className="font-EBGaramond text-white text-xl font-bold text-left pl-4">
              Artistas pop mais seguidos{" "}
            </p>
            {data.artists.map((artist, index) => (
              <ItemWithPopularity
                index={index + 1}
                name={artist.name}
                followers={artist.followers}
                imgUrl={artist.image}
              />
            ))}
          </InformationContainer>
          <InformationContainer>
            <p className="font-EBGaramond text-white text-xl font-bold text-left pl-4 flex-wrap">
              Gêneros mais comuns entre os artistas
            </p>
            {data.top_genres.map((genre, index) => (
              <ItemGeners index={index + 1} name={genre} />
            ))}
          </InformationContainer>
        </ListCarosel>
      ) : (
        <p className="font-EBGaramond text-white text-xl font-bold text-left m-auto">
          Carregando...
        </p>
      )}
    </div>
  );
};
