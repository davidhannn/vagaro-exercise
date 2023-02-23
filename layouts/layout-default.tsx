import { LayoutType } from "@/types/country";
import { pickBgColorByContinent } from "@/utils";

const LayoutDefault: React.FC<LayoutType> = ({
  name,
  code,
  emoji,
}: LayoutType) => {
  console.log(pickBgColorByContinent(code), "here");
  return (
    // <div className={`flex justify-center items-center h-screen`}>
    <div className="flex-row justify-center items-left text-center">
      <h1 className="text-5xl mb-5">{name}</h1>
      <h2 className="text-2xl mb-5">{code}</h2>
      <p className="text-7xl">{emoji}</p>
    </div>
    // </div>
  );
};

export default LayoutDefault;
