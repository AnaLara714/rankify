interface ItemGenersProps {
  name: string;
  index: number;
}

export const ItemGeners = ({ name, index }: ItemGenersProps) => {
  return (
    <div className="flex flex-rol font-EBGaramond text-white gap-4 items-center pl-6 pt-2 mb-2 w-full">
      <p className="text-2xl">#{index}</p>
      <p className=" text-lg  ">{name} </p>
    </div>
  );
};
