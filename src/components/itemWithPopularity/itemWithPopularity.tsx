interface ItemWithPopularityProps {
  index: number;
  name: string;
  followers: number;
  imgUrl: string;
}

export const ItemWithPopularity = ({
  index,
  name,
  followers,
  imgUrl,
}: ItemWithPopularityProps) => {
  return (
    <div className="flex flex-rol font-EBGaramond text-white gap-4 pl-6 pt-2 mb-2 w-full">
      <div className=" flex flex-rol gap-4 items-center">
        <p className="text-2xl">#{index}</p>
        <img className="bg-white w-14 h-14 rounded-full" src={imgUrl} />
        <div></div>
      </div>
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{followers} seguidores</p>
      </div>
    </div>
  );
};
