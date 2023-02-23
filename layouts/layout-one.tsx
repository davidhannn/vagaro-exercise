import { LayoutType } from "@/types/country";

const LayoutOne: React.FC<LayoutType> = ({ name, code, emoji }: LayoutType) => {
  return (
    <div className="flex-col justify-center items-center text-center">
      <h1 className="text-5xl mb-5">{name}</h1>
      <h2 className="text-2xl mb-5">{code}</h2>
      <p className="text-7xl">{emoji}</p>
    </div>
  );
};

export default LayoutOne;
