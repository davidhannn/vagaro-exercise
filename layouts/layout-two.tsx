import { LayoutType } from "@/types/country";

const LayoutTwo: React.FC<LayoutType> = ({ name, code, emoji }: LayoutType) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <p style={{ fontSize: 200, marginRight: 20 }}>{emoji}</p>

      <div className="flex flex-col justify-between items-center">
        <h1 className="text-5xl" style={{ paddingBottom: 10 }}>
          {name}
        </h1>
        <h2 className="text-2xl">{code}</h2>
      </div>
    </div>
  );
};

export default LayoutTwo;
