import { memo } from "react";
import type { MapNode as MapNodeType, ThemeInfo } from "@/data/nodes";

interface Props {
  node: MapNodeType;
  theme: ThemeInfo | undefined;
  scale: number;
  isHighlighted: boolean;
  isDimmed: boolean;
  onClick: (node: MapNodeType) => void;
}

const sizeMap = {
  sm: { fontSize: 9, padding: "3px 6px", maxWidth: 140 },
  md: { fontSize: 11, padding: "4px 8px", maxWidth: 180 },
  lg: { fontSize: 14, padding: "5px 10px", maxWidth: 220 },
  xl: { fontSize: 18, padding: "6px 14px", maxWidth: 280 },
};

function MapNodeComponent({ node, theme, scale, isHighlighted, isDimmed, onClick }: Props) {
  const size = sizeMap[node.size || "sm"];
  const themeColor = theme?.color || "0 0% 50%";

  return (
    <div
      className="absolute cursor-pointer select-none transition-all duration-200"
      style={{
        left: node.x,
        top: node.y,
        transform: "translate(-50%, -50%)",
        opacity: isDimmed ? 0.15 : 1,
        zIndex: isHighlighted ? 10 : 1,
      }}
      onClick={() => onClick(node)}
    >
      <div
        className="relative rounded-sm border text-center leading-tight transition-all duration-200"
        style={{
          fontSize: size.fontSize,
          padding: size.padding,
          maxWidth: size.maxWidth,
          color: `hsl(${themeColor})`,
          borderColor: isHighlighted
            ? `hsl(${themeColor})`
            : `hsl(${themeColor} / 0.3)`,
          backgroundColor: isHighlighted
            ? `hsl(${themeColor} / 0.15)`
            : `hsl(${themeColor} / 0.05)`,
          boxShadow: isHighlighted
            ? `0 0 20px hsl(${themeColor} / 0.3), 0 0 40px hsl(${themeColor} / 0.1)`
            : "none",
          textShadow: `0 0 10px hsl(${themeColor} / 0.3)`,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {node.label}
      </div>
    </div>
  );
}

export default memo(MapNodeComponent);
