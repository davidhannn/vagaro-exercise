import { LayoutType } from "@/types/country";

const LayoutTwo: React.FC<LayoutType> = ({ name, code, emoji }: LayoutType) => {
  return (
    <div
      className="flex flex-row justify-between items-center"
      style={{
        display: "flex",
        flexDirection: "column",
        zIndex: 10,
      }}
    >
      <p style={{ fontSize: 200 }}>{emoji}</p>
      <div
        className="flex flex-col justify-between items-center"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1
          className="text-5xl"
          style={{ paddingBottom: 10, fontWeight: 700, fontSize: 30 }}
        >
          {name}
        </h1>
        <h2
          className="text-2xl"
          style={{ paddingBottom: 10, fontWeight: 500, fontSize: 16 }}
        >
          {code}
        </h2>
      </div>
    </div>
  );
};

export default LayoutTwo;
