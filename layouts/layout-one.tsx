import { LayoutType } from "@/types/country";

const LayoutOne: React.FC<LayoutType> = ({ name, code, emoji }: LayoutType) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <p style={{ fontSize: 200, marginRight: 20 }}>{emoji}</p>

      <div
        className="flex flex-col justify-between items-center"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1
          className="text-3xl"
          style={{ paddingBottom: 10, fontWeight: 700, fontSize: 30 }}
        >
          {name}
        </h1>
        <h2 className="text-2xl" style={{ fontWeight: 500, fontSize: 16 }}>
          {code}
        </h2>
      </div>
    </div>
  );
};

export default LayoutOne;
