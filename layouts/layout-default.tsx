import { LayoutType } from "@/types/country";
import { pickBgColorByContinent } from "@/utils";

const LayoutDefault: React.FC<LayoutType> = ({
  name,
  code,
  emoji,
}: LayoutType) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-5xl mb-5" style={{ fontWeight: 700, fontSize: 30 }}>
        {name}
      </h1>
      <p className="text-7xl" style={{ fontSize: 200, marginRight: 20 }}>
        {emoji}
      </p>
      <h2 className="text-3xl mb-5" style={{ fontWeight: 500, fontSize: 16 }}>
        {code}
      </h2>
    </div>
  );
};

export default LayoutDefault;
