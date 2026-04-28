import { useMemo } from "react";
import type { MapNode, ThemeInfo } from "@/data/nodes";

interface Props {
  nodes: MapNode[];
  themes: ThemeInfo[];
  viewportX: number;
  viewportY: number;
  viewportWidth: number;
  viewportHeight: number;
  mapWidth: number;
  mapHeight: number;
  scale: number;
}

export default function MiniMap({
  nodes, themes, viewportX, viewportY, viewportWidth, viewportHeight, mapWidth, mapHeight, scale,
}: Props) {
  const miniW = 180;
  const miniH = (mapHeight / mapWidth) * miniW;
  const sx = miniW / mapWidth;
  const sy = miniH / mapHeight;

  const themeMap = useMemo(() => {
    const m = new Map<string, string>();
    themes.forEach((t) => m.set(t.id, t.color));
    return m;
  }, [themes]);

  const vx = (-viewportX / scale) * sx;
  const vy = (-viewportY / scale) * sy;
  const vw = (viewportWidth / scale) * sx;
  const vh = (viewportHeight / scale) * sy;

  return (
    <div
      className="fixed bottom-4 right-4 rounded border border-white/10 bg-black/80 backdrop-blur-sm z-50 overflow-hidden"
      style={{ width: miniW, height: miniH }}
    >
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute rounded-full"
          style={{
            left: n.x * sx,
            top: n.y * sy,
            width: 3,
            height: 3,
            backgroundColor: `hsl(${themeMap.get(n.theme) || "0 0% 50%"})`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      <div
        className="absolute border border-white/50 rounded-sm"
        style={{
          left: Math.max(0, vx),
          top: Math.max(0, vy),
          width: Math.min(vw, miniW),
          height: Math.min(vh, miniH),
        }}
      />
    </div>
  );
}
